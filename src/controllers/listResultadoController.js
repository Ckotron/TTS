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
			console.log('Primer query');
			console.log(result);
			conn.query('SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.Fecha=r.Fecha AND a.idPaciente=? AND a.Fecha=?',[idPac,idFch],(err, resultado) =>{
			if (err) throw err;
			console.log('Segundo query');
			console.log(resultado);
			//console.log(resultado.ValorR); // Antes de asignarle valor a ValorR
			if (resultado.ValorR == null){ // Valida si hubo o no respuestas en los cuestionarios
				resultado.ValorR = 'No aplicado';
			}
			//console.log(resultado.ValorR); // Después de asignarle valor a ValorR
			//console.log(resultado); // Para ver cómo se manda resultado
				conn.query('SELECT idRegresion, Regresion, DescRegresion FROM Resultadoregresion',(err, regre) =>{
					if (err) throw err;
					console.log('Tercer query');
					console.log(regre);
					conn.query('SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.Fecha=r.Fecha AND a.idPaciente=? AND a.Fecha=? AND r.ObservacionesCuestionario LIKE "Cuestionario PHQ-9%"',[idPac,idFch,idPac,idFch],(err, cuest1) =>{
						if (err) throw err;
						console.log('Cuarto query');
						console.log(cuest1);
						//console.log(cuest1.ValorR); // Antes de asignarle valor a ValorR
						if (cuest1.ValorR == null && cuest1.length <= 0){ // Valida si hubo o no respuestas en los cuestionarios
							cuest1.ValorR = 'No aplicado';
						}
						//console.log(cuest1.ValorR); // Después de asignarle valor a ValorR
						//console.log(cuest1); // Para ver cómo se manda cuest
						conn.query('SELECT r.ValorR, r.InterpretacionV, r.ObservacionesCuestionario FROM Resultado r, Aplicacion a WHERE a.idPaciente=r.idPaciente AND a.Fecha = r.Fecha AND a.idPaciente=? AND a.Fecha=? AND r.ObservacionesCuestionario LIKE "Cuestionario RFL%Dimension 8%"',[idPac,idFch,idPac,idFch],(err, cuest2) =>{
							if (err) throw err;
							console.log('Cuarto query');
							console.log(cuest2);
							//console.log(cuest2.ValorR); // Antes de asignarle valor a ValorR
							if (cuest2.ValorR == null && cuest2.length <= 0){ // Valida si hubo o no respuestas en los cuestionarios
								cuest2.ValorR = 'No aplicado';
							}
							//console.log(cuest2.ValorR); // Después de asignarle valor a ValorR
							//console.log(cuest2); // Para ver cómo se manda cuest
							conn.query('SELECT Observaciones FROM Aplicacion WHERE idPaciente=? AND Fecha=?',[idPac,idFch], (err, resulta) =>{
								if (err) throw err;
								console.log(resulta);
								res.render('listResultado', {
									notas: result,
									cala: resultado,
									regresion: regre,
									respcuest1: cuest1,
									respcuest2: cuest2,
									visu: resulta	
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

