const controller = {};

controller.rendering = (req,res) =>{
//	req.getConnection((err,conn) =>{
//		conn.query('SELECT * FROM doctores', (err, doctores) =>{
//			if(err){
//				res.json(err);
//			}
//			console.log(doctores);
			res.render('reg_doct');
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
	const corr = req.body.Correo;
	const nombU = req.body.NombUsuario;
	const contra = req.body.Contrasena;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO doctores (Nombre,ApPaterno,ApMaterno, FechaNac, Genero, Telefono, Correo, NombUsuario, Contrasena) VALUES(?,?,?,?,?,?,?,?,?);', [nombre, apPat, apMat, fechN, gen, tel, corr, nombU, contra], (err, doctores) =>{
			console.log(doctores);
		});
	});

	res.redirect('/login.ejs');

};

module.exports = controller;