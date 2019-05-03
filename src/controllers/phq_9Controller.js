const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	console.log('PHQ_9');
	console.log(id);
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [id], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('phq_9', {
				data: idpaciente
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('PHQ_9_SAVE');
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

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO phq_9 (idPaciente, P1, P2, P3, P4, P5, P6, P7, P8, P9) VALUES(?,?,?,?,?,?,?,?,?,?);', [id, P1, P2, P3, P4, P5, P6, P7, P8, P9], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id +'/ini_cuest.ejs');
};

module.exports = controller;