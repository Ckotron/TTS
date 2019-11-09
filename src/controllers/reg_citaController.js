const controller = {};
let idPac = -1;
let idDoc = -1;

controller.rendering = (req,res) =>{
	idPac = req.params.id;
	idDoc = req.params.idDoc;
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, idDoctor FROM pacientes WHERE idPaciente = ?', [idPac],(err, reg_cita) =>{
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
	const horaini = req.body.HoraInicio;
	idDoc = req.params.idDoc;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO Aplicacion (Fecha, HoraInicio, idPaciente, Estado) VALUES(?,?,?, "Pendiente");', [fch, horaini, idPac], (err, citas) =>{
			console.log(citas);
		});
	});

	res.redirect('/'+idDoc+'/pacientes.ejs/info_paciente.ejs/'+idPac);
};

module.exports = controller;