const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;
	
	console.log('RFL');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [idPac], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('rfl', {
				data: idpaciente,
				doc: idDoc,
				fch: idFch
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('RFL_SAVE');
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
	const idPregunta22 = 22;
	const idPregunta23 = 23;
	const idPregunta24 = 24;
	const idPregunta25 = 25;
	const idPregunta26 = 26;
	const idPregunta27 = 27;
	const idPregunta28 = 28;
	const idPregunta29 = 29;
	const idPregunta30 = 30;
	const idPregunta31 = 31;
	const idPregunta32 = 32;
	const idPregunta33 = 33;
	const idPregunta34 = 34;
	const idPregunta35 = 35;
	const idPregunta36 = 36;
	const idPregunta37 = 37;
	const idPregunta38 = 38;
	const idPregunta39 = 39;
	const idPregunta40 = 40;
	const idPregunta41 = 41;
	const idPregunta42 = 42;
	const idPregunta43 = 43;
	const idPregunta44 = 44;
	const idPregunta45 = 45;
	const idPregunta46 = 46;
	const idPregunta47 = 47;
	const idPregunta48 = 48;

	const idDimension4 = 4;
	const idDimension5 = 5;
	const idDimension6 = 6;
	const idDimension7 = 7;
	const idDimension8 = 8;
	const idDimension9 = 9;
	const idCuestionario = 4;

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
	const P22 = req.body.P22;
	const P23 = req.body.P23;
	const P24 = req.body.P24;
	const P25 = req.body.P25;
	const P26 = req.body.P26;
	const P27 = req.body.P27;
	const P28 = req.body.P28;
	const P29 = req.body.P29;
	const P30 = req.body.P30;
	const P31 = req.body.P31;
	const P32 = req.body.P32;
	const P33 = req.body.P33;
	const P34 = req.body.P34;
	const P35 = req.body.P35;
	const P36 = req.body.P36;
	const P37 = req.body.P37;
	const P38 = req.body.P38;
	const P39 = req.body.P39;
	const P40 = req.body.P40;
	const P41 = req.body.P41;
	const P42 = req.body.P42;
	const P43 = req.body.P43;
	const P44 = req.body.P44;
	const P45 = req.body.P45;
	const P46 = req.body.P46;
	const P47 = req.body.P47;
	const P48 = req.body.P48;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P1, idPregunta1,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P2, idPregunta2,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P3, idPregunta3,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P4, idPregunta4,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P5, idPregunta5,idDimension9,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P6, idPregunta6,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P7, idPregunta7,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P8, idPregunta8,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P9, idPregunta9,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P10, idPregunta10,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P11, idPregunta11,idDimension6,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P12, idPregunta12,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P13, idPregunta13,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P14, idPregunta14,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P15, idPregunta15,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P16, idPregunta16,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P17, idPregunta17,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P18, idPregunta18,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P19, idPregunta19,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P20, idPregunta20,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P21, idPregunta21,idDimension6,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P22, idPregunta22,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P23, idPregunta23,idDimension9,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P24, idPregunta24,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P25, idPregunta25,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P26, idPregunta26,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P27, idPregunta27,idDimension9,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P28, idPregunta28,idDimension6,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P29, idPregunta29,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P30, idPregunta30,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P31, idPregunta31,idDimension8,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P32, idPregunta32,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P33, idPregunta33,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P34, idPregunta34,idDimension9,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P35, idPregunta35,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P36, idPregunta36,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P37, idPregunta37,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P38, idPregunta38,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P39, idPregunta39,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P40, idPregunta40,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P41, idPregunta41,idDimension8,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P42, idPregunta42,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P43, idPregunta43,idDimension8,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P44, idPregunta44,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P45, idPregunta45,idDimension4,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P46, idPregunta46,idDimension7,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P47, idPregunta47,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P48, idPregunta48,idDimension5,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('CALL CalificaCuestionario4(?,(SELECT CURRENT_DATE()))', [idPac], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/'+idDoc+'/atender.ejs/ini_cuest.ejs/'+idPac+'/'+idFch);
};

module.exports = controller;