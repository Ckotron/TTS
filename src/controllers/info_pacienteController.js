const controller = {};
let id = -1;
let idDoc = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	idDoc = req.params.idDoc;

	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM pacientes WHERE idPaciente = ? AND idDoctor = ?', [id,idDoc], (err, paciente) =>{
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
					res.render('info_paciente', {
						data: paciente,
						tel: upd_tel,
						corr: upd_corr
					});
				});
			});
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

controller.delete = (req,res) =>{
	req.getConnection((err,conn) =>{
		conn.query('UPDATE Pacientes SET Estado = "Archivado" WHERE idPaciente = ? AND idDoctor = ?', [id,idDoc], (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.redirect('/'+idDoc+'/pacientes.ejs');
		});
	});
};

module.exports = controller;