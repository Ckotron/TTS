const controller = {};
let id = -1;
let idDoc = -1;

const Cryptr = require ('cryptr');
const cryptr = new Cryptr('KTT##2018-B075');

controller.list = (req,res) =>{
	id = req.params.id;
	idDoc = req.params.idDoc;

	console.log('List_upd_pac');
	console.log(id);
	console.log(idDoc);

	req.getConnection((err,conn) =>{
		conn.query('SELECT a.idPaciente, a.Nombre, a.ApPaterno, a.ApMaterno, a.FechaNac, a.Genero, a.Alergias, a.TipoSangre, a.EdoCivil, a.NoIncidencias, a.idDoctor FROM pacientes a WHERE a.idPaciente = ?', [id], (err, upd_paciente) =>{
			if(err){
				res.json(err);
			}
			conn.query('SELECT a.idPaciente, a.Telefono FROM telefonospaciente a WHERE a.idPaciente = ?', [id], (err, upd_tel) =>{
			if(err){
				res.json(err);
			}
			conn.query('SELECT a.idPaciente, a.Correo FROM correospaciente a WHERE a.idPaciente = ?', [id], (err, upd_corr) =>{	
			if(err){
				res.json(err);
			}
					const noIndecrypted = cryptr.decrypt(upd_paciente[0].NoIncidencias);

					console.log('Decifrada'+noIndecrypted);

					upd_paciente[0].NoIncidencias = noIndecrypted;

					console.log('Valor decifrado'+upd_paciente[0].NoIncidencias);

					res.render('pacientes_update', {
						data: upd_paciente,
						tel: upd_tel,
						corr: upd_corr
					});
				});
			});
			
		});
	});
};

controller.update = (req,res) =>{
	console.log('Update_pac');
	console.log(id);
	console.log(idDoc);

	const newNombre = req.body.Nombre;
	const newApPat = req.body.ApPaterno;	
	const newApMat = req.body.ApMaterno;
	const newFechN = req.body.FechaNac;
	const newGen = req.body.Genero;
	const newAler = req.body.Alergias;
	const newTipS = req.body.TipoSangre;
	const newEdoC = req.body.EdoCivil;
	const newNoInc = req.body.NoIncidencias;
	const newIdDoc = req.body.idDoctor;

	const noIncencrypted = cryptr.encrypt(newNoInc);

	console.log(noIncencrypted);


	const newTel = req.body.Telefono;
	const newCorr = req.body.Correo;

	req.getConnection((err,conn) =>{
		conn.query('UPDATE pacientes SET Nombre = ?, ApPaterno = ?, ApMaterno = ?, FechaNac = ?, Genero = ?, Alergias = ?, TipoSangre = ?, EdoCivil = ?, NoIncidencias = ? WHERE idPaciente = ?', [newNombre, newApPat, newApMat, newFechN, newGen, newAler, newTipS, newEdoC, noIncencrypted, id], (err, pacientes) =>{
			if(err){
				res.json(err);
			}
			conn.query('UPDATE telefonospaciente SET Telefono = ? WHERE idPaciente = ?', [newTel, id], (err, pacientes) =>{
				if(err){
					res.json(err);
				}
				conn.query('UPDATE correospaciente SET Correo = ? WHERE idPaciente = ?', [newCorr, id], (err, pacientes) =>{
					if(err){
						res.json(err);
					}
					res.redirect('/'+idDoc+'/pacientes.ejs/info_paciente.ejs/'+id);
				});
			});

		});
	});
};
module.exports = controller;