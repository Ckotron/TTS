const controller = {};


controller.rendering = (req,res) =>{
//	req.getConnection((err,conn) =>{
//		conn.query('SELECT * FROM doctores', (err, doctores) =>{
//			if(err){
//				res.json(err);
//			}
//			console.log(doctores);
			res.render('login');
//		});
//	});
};

controller.list = (req,res) =>{
	const nombU = req.body.NombUsuario;
	const contra = req.body.Contrasena;

	req.getConnection((err,conn) =>{
		conn.query('SELECT NombUsuario, Contrasena FROM doctores WHERE NombUsuario = ? AND Contrasena = ?', [nombU,contra], (err, doctores) =>{
			if(err){
				res.json(err);
			}else if (doctores.length = 0){
				console.log(doctores);
				res.redirect('/login.ejs');
			}else{
				console.log(doctores);
				res.redirect('/pacientes.ejs');
			}
		});
	});
};

module.exports = controller;