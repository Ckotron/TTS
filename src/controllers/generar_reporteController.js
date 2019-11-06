const controller = {};
let idDoc = -1;
let idPac = -1;
let idFch = -1;
let fch = -1;


controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;
	idFch = req.params.idFch;
	console.log('generar_reporte');
	console.log(idDoc);
	console.log(idPac);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT p.Nombre, p.ApPaterno, p.ApMaterno, a.Fecha, a.Observaciones, p.idDoctor, p.idPaciente FROM Pacientes p, Aplicacion a WHERE p.idPaciente=a.idPaciente AND p.idPaciente=? AND a.Fecha=?',[idPac,idFch], (err, result) =>{
		if (err) throw err;
			conn.query('SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.idPaciente=? AND a.Fecha=?',[idPac,idFch],(err, resultado) =>{
			if (err) throw err;
			console.log(resultado);
				conn.query('SELECT idRegresion, Regresion, DescRegresion FROM Resultadoregresion',(err, regre) =>{
					if (err) throw err;
					console.log(regre);
					conn.query('SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.idPaciente=? AND a.Fecha=? AND r.ObservacionesCuestionario LIKE "Cuestionario PHQ-9%" UNION SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.idPaciente=? AND a.Fecha=? AND r.ObservacionesCuestionario LIKE "Cuestionario RFL%Dimension 8"',[idPac,idFch,idPac,idFch],(err, cuest) =>{
						if (err) throw err;
						console.log(cuest);
						res.render('generar_reporte', {
						notas: result,
						cala: resultado,
						regresion: regre,
						respcuest: cuest	
					});
					});
				});
			});
		});
	});
};

controller.update = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;
	idFch = req.params.idFch;

	const observaciones = req.body.observaciones;
	console.log(idDoc);
	console.log(idPac);
	console.log(idFch);
	req.getConnection((err,conn) =>{
		conn.query('UPDATE Aplicacion SET Observaciones=CONCAT(COALESCE(Observaciones,""),CASE WHEN Observaciones IS NULL THEN "" ELSE " | " END,?) WHERE idPaciente=? AND Fecha=?',[observaciones,idPac,idFch],(err, resultado) => {
			res.redirect('/'+idDoc+'/atender.ejs/'+idPac+'/'+idFch);
		});
	});
};

module.exports = controller;

