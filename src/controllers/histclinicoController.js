const controller = {};
let idDoc = -1;

controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	console.log('Histclinico');
	console.log(idDoc);

	req.getConnection((err,conn) =>{
		conn.query('SELECT D.idDoctor, P.Nombre, P.ApPaterno, P.ApMaterno, A.Fecha, A.HoraInicio, A.idPaciente FROM Doctores D LEFT JOIN Pacientes P ON D.idDoctor = P.idDoctor AND P.idPaciente IN ( SELECT P.idPaciente FROM Pacientes P INNER JOIN Aplicacion A ON P.idPaciente = A.idPaciente) LEFT JOIN Aplicacion A ON P.idPaciente = A.idPaciente WHERE D.idDoctor = ?', [idDoc], (err, hist) =>{
			if(err){
				res.json(err);
			}
			console.log(hist);
			res.render('histclinico', {
				data: hist				
			});	
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};


module.exports = controller;