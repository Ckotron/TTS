const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;

	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM pacientes WHERE idPaciente = ?', [id], (err, upd_paciente) =>{
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
	id = req.params.id;
	//console.log('Update');
	//console.log(id);

	const newNombre = req.body.Nombre;
	const newApPat = req.body.ApPaterno;	
	const newApMat = req.body.ApMaterno;
	const newFechN = req.body.FechaNac;
	const newGen = req.body.Genero;
	const newTel = req.body.Telefono;
	const newAler = req.body.Alergias;
	const newTipS = req.body.TipoSangre;
	const newEdoC = req.body.EdoCivil;
	const newNoInc = req.body.NoIncidencias;
	const newIdDoc = req.body.idDoctor;

	req.getConnection((err,conn) =>{
		conn.query('UPDATE pacientes SET Nombre = ?, ApPaterno = ?, ApMaterno = ?, FechaNac = ?, Genero = ?, Telefono = ?, Alergias = ?, TipoSangre = ?, EdoCivil = ?, NoIncidencias = ?, idDoctor = ? WHERE idPaciente = ?', [newNombre, newApPat, newApMat, newFechN, newGen, newTel, newAler, newTipS, newEdoC, newNoInc, newIdDoc, id], (err, pacientes) =>{
			res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id);
		});
	});
};
module.exports = controller;