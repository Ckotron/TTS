const controller = {};
let id = -1;
let idDoc = -1;


controller.list = (req,res) =>{
	id = req.params.id;
	idDoc = req.params.idDoc;

	req.getConnection((err,conn) =>{
		conn.query('SELECT a.idPaciente, a.Nombre, a.ApPaterno, a.ApMaterno, a.FechaNac, a.Genero, a.Alergias, a.TipoSangre, a.EdoCivil, a.NoIncidencias, a.idDoctor, b.Telefono, c.Correo FROM pacientes a, telefonospaciente b, correospaciente c WHERE b.idPaciente = a.idPaciente AND a.idPaciente = b.idPaciente AND a.idPaciente = ?', [id], (err, upd_paciente) =>{
			if(err){
				res.json(err);
			}
			res.render('pacientes_update', {
				data: upd_paciente
			});
		});
	});
};

controller.update = (req,res) =>{
	//console.log('Update');
	//console.log(id);

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

	const newTel = req.body.Telefono;
	const newCorr = req.body.Correo;

	req.getConnection((err,conn) =>{
		conn.query('UPDATE pacientes SET Nombre = ?, ApPaterno = ?, ApMaterno = ?, FechaNac = ?, Genero = ?, Alergias = ?, TipoSangre = ?, EdoCivil = ?, NoIncidencias = ? WHERE idPaciente = ?', [newNombre, newApPat, newApMat, newFechN, newGen, newAler, newTipS, newEdoC, newNoInc, id], (err, pacientes) =>{
			res.redirect('/'+idDoc+'/pacientes.ejs/info_paciente.ejs/'+ id);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('UPDATE telefonospaciente SET Telefono = ? WHERE idPaciente = ?', [newTel, id], (err, pacientes) =>{
			res.redirect('/'+idDoc+'/pacientes.ejs/info_paciente.ejs/'+ id);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('UPDATE correospaciente SET Correo = ? WHERE idPaciente = ?', [newCorr, id], (err, pacientes) =>{
			res.redirect('/'+idDoc+'/pacientes.ejs/info_paciente.ejs/'+ id);
		});
	});
};
module.exports = controller;