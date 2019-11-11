const controller = {};
let idDoc = -1;

controller.rendering = (req,res) =>{
	idDoc = req.params.idDoc;
//	req.getConnection((err,conn) =>{
//		conn.query('SELECT * FROM pacientes', (err, paciente) =>{
//			if(err){
//				res.json(err);
//			}
//			console.log(paciente);
	res.render('reg_pac', {
		data: idDoc
	});
//		});
//	});
};

controller.save = (req,res) =>{
	idDoc = req.params.idDoc;
	
	const nombre = req.body.Nombre;
	const apPat = req.body.ApPaterno;
	const apMat = req.body.ApMaterno;
	const fechN = req.body.FechaNac;
	const gen = req.body.Genero;
	const tel = req.body.Telefono;
	const corr = req.body.Correo;
	const aler = req.body.Alergias;
	const tipS = req.body.TipoSangre;
	const edoC = req.body.EdoCivil;
	const noInc = req.body.NoIncidencias;

	const telfijo = req.body.TelefonoFijo;
	const correo2 = req.body.Correo2;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('CALL IngresaPaciente(?,?,?,?,?,?,?,?,?,?);', [nombre, apPat, apMat, fechN, gen, aler, tipS, edoC, noInc, idDoc], (err, pacientes) =>{
			console.log(pacientes);
		});
	});

	if(telfijo == null || telfijo == ''){
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO telefonospaciente (idPaciente,Telefono) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [tel], (err, pacientes) =>{
				console.log(pacientes);
			});
		});	
	}else{
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO telefonospaciente (idPaciente,Telefono) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [tel], (err, pacientes) =>{
				console.log(pacientes);
			});
		});	
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO telefonospaciente (idPaciente,Telefono) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [telfijo], (err, pacientes) =>{
				console.log(pacientes);
			});
		});	
	}

	if(correo2 == null || correo2 == ''){
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO correospaciente (idPaciente,Correo) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [corr], (err, pacientes) =>{
				console.log(pacientes);
			});
		});
	}else{
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO correospaciente (idPaciente,Correo) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [corr], (err, pacientes) =>{
				console.log(pacientes);
			});
		});		
		req.getConnection((err,conn) =>{
			conn.query('INSERT INTO correospaciente (idPaciente,Correo) VALUES((SELECT MAX(idPaciente) FROM pacientes),?);', [correo2], (err, pacientes) =>{
				console.log(pacientes);
			});
		});	
	}






	res.redirect('/'+idDoc+'/pacientes.ejs');
};

module.exports = controller;