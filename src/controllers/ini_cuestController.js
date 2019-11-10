const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('Ini_cuest');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, idDoctor FROM Pacientes WHERE idPaciente = ? and idDoctor = ?;', [idPac,idDoc], (err, cuest) =>{
			if(err){
				res.json(err);
			}
			console.log(cuest);
			conn.query('SELECT idRespuesta FROM respuestaspacientes rp WHERE rp.idPaciente = ? AND rp.idCuestionario = 1 AND rp.Fecha = ?;', [idPac,idFch], (err, cuest1) =>{
				if(err){
					res.json(err);
				}
				console.log(cuest1);
				if (cuest1.idRespuesta == null && cuest1.length <= 0){
					cuest1.idRespuesta = 'No aplicado';
				}
				console.log(cuest1);
				conn.query('SELECT idRespuesta FROM respuestaspacientes rp WHERE rp.idPaciente = ? AND rp.idCuestionario = 2 AND rp.Fecha = ?;', [idPac,idFch], (err, cuest2) =>{
					if(err){
						res.json(err);
					}
					console.log(cuest2);
					if (cuest2.idRespuesta == null && cuest2.length <= 0){
						cuest2.idRespuesta = 'No aplicado';
					}
					console.log(cuest2);
					conn.query('SELECT idRespuesta FROM respuestaspacientes rp WHERE rp.idPaciente = ? AND rp.idCuestionario = 3 AND rp.Fecha = ?;', [idPac,idFch], (err, cuest3) =>{
						if(err){
							res.json(err);
						}
						console.log(cuest3);
						if (cuest3.idRespuesta == null && cuest3.length <= 0){
							cuest3.idRespuesta = 'No aplicado';
						}
						console.log(cuest3);
						conn.query('SELECT idRespuesta FROM respuestaspacientes rp WHERE rp.idPaciente = ? AND rp.idCuestionario = 4 AND rp.Fecha = ?;', [idPac,idFch], (err, cuest4) =>{
							if(err){
								res.json(err);
							}
							console.log(cuest4);
							if (cuest4.idRespuesta == null && cuest4.length <= 0){
								cuest4.idRespuesta = 'No aplicado';
							}
							console.log(cuest4);
							conn.query('SELECT DISTINCT r.InterpretacionV FROM resultado r WHERE r.idPaciente = ? AND r.Fecha = ? AND ObservacionesCuestionario LIKE "Cuestionario PHQ-2 Resuelto";', [idPac,idFch], (err, flgphq9) =>{
								if(err){
									res.json(err);
								}
								console.log(flgphq9);
								if (flgphq9.InterpretacionV == null && flgphq9.length <= 0){
									flgphq9.InterpretacionV = 'No aplicado';
								}
								console.log(flgphq9);
								res.render('ini_cuest', {
									data: cuest,
									fch: idFch,
									cuest1resuelto: cuest1,
									cuest2resuelto: cuest2,
									cuest3resuelto: cuest3,
									cuest4resuelto: cuest4,
									aplicar: flgphq9
								});
							});
						});
					});
				});
			});
		});
	});
};

module.exports = controller;