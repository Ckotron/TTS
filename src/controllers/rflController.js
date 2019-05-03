const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	console.log('RFL');
	console.log(id);
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [id], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('rfl', {
				data: idpaciente
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('RFL_SAVE');
	console.log(id);

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
		conn.query('INSERT INTO rfl (idPaciente, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P38, P39, P40, P41, P42, P43, P44, P45, P46, P47, P48) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);', [id, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P38, P39, P40, P41, P42, P43, P44, P45, P46, P47, P48], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id +'/ini_cuest.ejs');
};

module.exports = controller;