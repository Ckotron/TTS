const controller = {};
let idDoc = -1;
let fch = -1;

controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	console.log('Cita_visuacit');
	console.log(idDoc);

	req.getConnection((err,conn) =>{
		conn.query('SELECT D.idDoctor, P.Nombre, P.ApPaterno, P.ApMaterno, A.Fecha, A.HoraInicio, A.idPaciente FROM Doctores D LEFT JOIN Pacientes P ON D.idDoctor = P.idDoctor AND P.idPaciente IN ( SELECT P.idPaciente FROM Pacientes P INNER JOIN Aplicacion A ON P.idPaciente = A.idPaciente) LEFT JOIN Aplicacion A ON P.idPaciente = A.idPaciente WHERE D.idDoctor = ?', [idDoc], (err, cita) =>{
			if(err){
				res.json(err);
			}
			res.render('visuacit', {
				data: cita				
			});	
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

controller.delete = (req,res) =>{
	fch = req.params.fch;
	idDoc = req.params.idDoc;

	req.getConnection((err,conn) =>{
		conn.query('DELETE FROM Aplicacion WHERE Fecha = ?', [fch], (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.redirect('/'+idDoc+'/visuacit.ejs');
		});
	});
};

module.exports = controller;