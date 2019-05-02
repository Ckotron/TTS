const controller = {};

controller.rendering = (req,res) =>{
//	req.getConnection((err,conn) =>{
//		conn.query('SELECT * FROM pacientes', (err, paciente) =>{
//			if(err){
//				res.json(err);
//			}
//			console.log(paciente);
			res.render('reg_pac');
//		});
//	});
};

controller.save = (req,res) =>{
	const nombre = req.body.Nombre;
	const apPat = req.body.ApPaterno;
	const apMat = req.body.ApMaterno;
	const fechN = req.body.FechaNac;
	const gen = req.body.Genero;
	const tel = req.body.Telefono;
	const aler = req.body.Alergias;
	const tipS = req.body.TipoSangre;
	const edoC = req.body.EdoCivil;
	const noInc = req.body.NoIncidencias;
	const idDoc = req.body.idDoctor;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO pacientes (Nombre,ApPaterno,ApMaterno, FechaNac, Genero, Telefono, Alergias, TipoSangre, EdoCivil, NoIncidencias, idDoctor) VALUES(?,?,?,?,?,?,?,?,?,?,?);', [nombre, apPat, apMat, fechN, gen, tel, aler, tipS, edoC, noInc, idDoc], (err, pacientes) =>{
			console.log(pacientes);
		});
	});

	res.redirect('/pacientes.ejs');
};

module.exports = controller;