const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [id], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('ssm_ers', {
				data: idpaciente
			});
		});
	});
};

controller.save = (req,res) =>{
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
		conn.query('INSERT INTO ssm_ers (idPaciente, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);', [id, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id +'/ini_cuest.ejs');
};

module.exports = controller;