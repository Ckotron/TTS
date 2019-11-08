const controller = {};


controller.rendering = (req,res) =>{
	req.getConnection((err,conn) =>{
		conn.query('SELECT "NULL" AS "idDoctor"', (err, doctores) =>{
			if(err){
				res.json(err);
			}
			console.log(doctores);
			res.render('login', {
				data: doctores
			});
		});
	});
};

controller.list = (req,res) =>{
	const nombU = req.body.NombUsuario;
	const contra = req.body.Contrasena;

	req.getConnection((err,conn) =>{
		conn.query('SELECT idDoctor, NombUsuario, Contraseña FROM doctores WHERE NombUsuario = ? AND Contraseña = ?', [nombU,contra], (err, doctores) =>{
			if(err){
				res.json(err);
			}else if (doctores.length == 0){
				console.log(doctores);
				res.redirect('/login.ejs');
			}else{
				console.log(doctores[0].idDoctor);
				res.redirect('/'+doctores[0].idDoctor+'/index.ejs');
			}
		});
	});
};

module.exports = controller;