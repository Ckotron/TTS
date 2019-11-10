const controller = {};
let idDoc = -1;
let idPac = -1;

controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;

	console.log(idDoc+"list");
	req.getConnection((err,conn) =>{
		conn.query('SELECT D.idDoctor, P.idPaciente, P.Nombre, P.ApPaterno, P.ApMaterno FROM Doctores D LEFT JOIN Pacientes P ON D.idDoctor = P.idDoctor WHERE D.idDoctor = ? AND Estado="Archivado" UNION SELECT "" AS "idDoctor", "" AS "idPaciente", "" AS "Nombre", "" AS "ApPaterno", "" AS "ApMaterno"',[idDoc], (err, pacientes) =>{
			if(err){
				res.json(err);
			}
			console.log(pacientes);
				res.render('pacientes_arch', {
					data: pacientes,
					doc: idDoc
				});
		});
	});
};

controller.update = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;	

	console.log(idDoc+"list");
	req.getConnection((err,conn) =>{
		conn.query('UPDATE pacientes SET Estado = "Activo" WHERE  idDoctor = ? AND idPaciente = ?',[idDoc,idPac], (err, updestado) =>{
			if(err){
				res.json(err);
			}
			console.log(updestado);
			res.redirect('/'+idDoc+'/pacientes_arch.ejs');
		});
	});
};

module.exports = controller;