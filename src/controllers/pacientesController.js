const controller = {};
let idDocPac = -1;

controller.list = (req,res) =>{
	idDocPac = req.params.idDoc;
	console.log(idDocPac+"list");
	req.getConnection((err,conn) =>{
		conn.query('SELECT D.idDoctor, P.idPaciente, P.Nombre, P.ApPaterno, P.ApMaterno FROM Doctores D LEFT JOIN Pacientes P ON D.idDoctor = P.idDoctor WHERE D.idDoctor = ?',[idDocPac], (err, pacientes) =>{
			if(err){
				res.json(err);
			}
			console.log(pacientes);
			//if(pacientes != null){
				res.render('pacientes', {
					data: pacientes
				});
			//	console.log(pacientes);
			//}else{
			//	pacientes=idDoc;
			//	console.log(idDocPac+"pruebaif");
			//	res.render('pacientes', {
			//		data: idDocPac
			//	});
			//}
		});
	});
};

controller.rendering = (req,res) =>{
	idDocPac = req.params.idDoc;
	console.log(idDocPac+"rendering");
	
			
				res.render('pacientes', {
					data: idDocPac
				});
};

module.exports = controller;