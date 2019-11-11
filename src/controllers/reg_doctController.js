const controller = {};

const Cryptr = require ('cryptr');
const cryptr = new Cryptr('KTT##2018-B075');

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
	const nombU = req.body.NombUsuario;
	const contra = req.body.Contrasena;
	const tel = req.body.Telefono;
	const corr = req.body.Correo;

	//cifrado
	const contraencrypted = cryptr.encrypt(contra);

	console.log(contraencrypted);

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO doctores (Nombre,ApPaterno,ApMaterno, FechaNac, Genero, NombUsuario, Contraseña) VALUES(?,?,?,?,?,?,?);', [nombre, apPat, apMat, fechN, gen, nombU, contraencrypted], (err, doctores) =>{
			console.log(doctores);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO telefonosdoctor (idDoctor,Telefono) VALUES((SELECT MAX(idDoctor) FROM doctores),?);', tel, (err, doctores) =>{
			console.log(doctores);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO correosdoctor (idDoctor,Correo) VALUES((SELECT MAX(idDoctor) FROM doctores),?);', corr, (err, doctores) =>{
			console.log(doctores);
		});
	});

	res.redirect('/login.ejs');

};

//No sabemos que ocurría, pero ya funciona
/*controller.save1 = (req,res) =>{
	const tel = req.body.Telefono;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO telefonosdoctor (idDoctor,Telefono) VALUES((SELECT MAX(idDoctor) FROM doctores),?);', tel, (err, doctores) =>{
			console.log(doctores);
		});
	});

	res.redirect('/login.ejs');

};

controller.save2 = (req,res) =>{
	const corr = req.body.Correo;

	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO correosdoctor (idDoctor,Correo) VALUES((SELECT MAX(idDoctor) FROM doctores),?);', corr, (err, doctores) =>{
			console.log(doctores);
		});
	});

	res.redirect('/login.ejs');

};*/

module.exports = controller;