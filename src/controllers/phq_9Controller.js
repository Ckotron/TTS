const controller = {};
let id = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;
	idFch = req.params.idFch;

	console.log('PHQ9');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [idPac], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('phq_9', {
				data: idpaciente,
				doc: idDoc,
				fch: idFch
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('PHQ_9_SAVE');

	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	const idPregunta1 = 1;
	const idPregunta2 = 2;
	const idPregunta3 = 3;
	const idPregunta4 = 4;
	const idPregunta5 = 5;
	const idPregunta6 = 6;
	const idPregunta7 = 7;
	const idPregunta8 = 8;
	const idPregunta9 = 9;

	const idDimension = 3;
	const idCuestionario = 3;

	const P1 = req.body.P1;
	const P2 = req.body.P2;
	const P3 = req.body.P3;
	const P4 = req.body.P4;
	const P5 = req.body.P5;
	const P6 = req.body.P6;
	const P7 = req.body.P7;
	const P8 = req.body.P8;
	const P9 = req.body.P9;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P1, idPregunta1,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P2, idPregunta2,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P3, idPregunta3,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P4, idPregunta4,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P5, idPregunta5,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P6, idPregunta6,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P7, idPregunta7,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P8, idPregunta8,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P9, idPregunta9,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	req.getConnection((err,conn) =>{
		conn.query('CALL CalificaCuestionario3(?,(SELECT CURRENT_DATE()))', [idPac], (err, cuest) =>{
			console.log(cuest);
		});
	});	

	res.redirect('/'+idDoc+'/atender.ejs/ini_cuest.ejs/'+idPac+'/'+idFch);
};

module.exports = controller;