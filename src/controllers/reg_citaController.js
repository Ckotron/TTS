const controller = {};
let idPac = -1;

controller.rendering = (req,res) =>{
	idPac = req.params.id;
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [idPac],(err, reg_cita) =>{
			if(err){
				res.json(err);
			}
			//console.log(cita);
			res.render('reg_cita', {
				data: reg_cita
			});
		});
	});
};

controller.save = (req,res) =>{
	const fch = req.body.Fecha;
	const idDoc = req.body.idDoctor;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO cita (Fecha, idPaciente, idDoctor) VALUES(?,?,?);', [fch, idPac, idDoc], (err, citas) =>{
			console.log(citas);
		});
	});

	res.redirect('/pacientes.ejs/info_paciente.ejs/'+idPac);
};

module.exports = controller;