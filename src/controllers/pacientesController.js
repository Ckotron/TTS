const controller = {};
let idDocPac = -1;

controller.list = (req,res) =>{
	idDocPac = req.params.idDoc;
	console.log(idDocPac+"list");
	req.getConnection((err,conn) =>{
		conn.query('SELECT D.idDoctor, P.idPaciente, P.Nombre, P.ApPaterno, P.ApMaterno FROM Doctores D LEFT JOIN Pacientes P ON D.idDoctor = P.idDoctor WHERE D.idDoctor = ? AND Estado="Activo" UNION SELECT "" AS "idDoctor", "" AS "idPaciente", "" AS "Nombre", "" AS "ApPaterno", "" AS "ApMaterno"',[idDocPac], (err, pacientes) =>{
			if(err){
				res.json(err);
			}
			console.log(pacientes);
			res.render('pacientes', {
				data: pacientes,
				doc: idDocPac
			});
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