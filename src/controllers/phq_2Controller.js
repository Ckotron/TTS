const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	console.log('PHQ_2');
	console.log(id);
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [id], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('phq_2', {
				data: idpaciente
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('PHQ_2_SAVE');
	console.log(id);

	const P1 = req.body.P1;
	const P2 = req.body.P2;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO phq_2 (idPaciente, P1, P2) VALUES(?,?,?);', [id, P1, P2], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id +'/ini_cuest.ejs');
};

module.exports = controller;