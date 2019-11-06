const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('SSM_ERS');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [idPac], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('ssm_ers', {
				data: idpaciente,
				doc: idDoc,
				fch: idFch
			});
		});
	});
};

controller.save = (req,res) =>{

	const idPregunta1 = 1;
	const idPregunta2 = 2;
	const idPregunta3 = 3;
	const idPregunta4 = 4;
	const idPregunta5 = 5;
	const idPregunta6 = 6;
	const idPregunta7 = 7;
	const idPregunta8 = 8;
	const idPregunta9 = 9;
	const idPregunta10 = 10;
	const idPregunta11 = 11;
	const idPregunta12 = 12;
	const idPregunta13 = 13;
	const idPregunta14 = 14;
	const idPregunta15 = 15;
	const idPregunta16 = 16;
	const idPregunta17 = 17;
	const idPregunta18 = 18;
	const idPregunta19 = 19;
	const idPregunta20 = 20;
	const idPregunta21 = 21;

	const idDimension = 1;
	const idCuestionario = 1;

	const P1 = req.body.P1;
	const P2 = req.body.P2;
	const P3 = req.body.P3;
	const P4 = req.body.P4;
	const P5 = req.body.P5;
	const P6 = req.body.P6;
	const P7 = req.body.P7;
	const P8 = req.body.P8;
	const P9 = req.body.P9;
	const P10 = req.body.P10;
	const P11 = req.body.P11;
	const P12 = req.body.P12;
	const P13 = req.body.P13;
	const P14 = req.body.P14;
	const P15 = req.body.P15;
	const P16 = req.body.P16;
	const P17 = req.body.P17;
	const P18 = req.body.P18;
	const P19 = req.body.P19;
	const P20 = req.body.P20;
	const P21 = req.body.P21;

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
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P10, idPregunta10,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P11, idPregunta11,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P12, idPregunta12,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P13, idPregunta13,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P14, idPregunta14,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P14, idPregunta14,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P15, idPregunta15,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P16, idPregunta16,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P17, idPregunta17,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P18, idPregunta18,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P19, idPregunta19,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P20, idPregunta20,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

		req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P21, idPregunta21,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('CALL CalificaCuestionario1(?,(SELECT CURRENT_DATE()))', [idPac], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/'+idDoc+'/atender.ejs/ini_cuest.ejs/'+idPac+'/'+idFch);
};

module.exports = controller;