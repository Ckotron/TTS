const controller = {};

const Cryptr = require ('cryptr');
const cryptr = new Cryptr('KTT##2018-B075');

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
		conn.query('SELECT idDoctor, NombUsuario, Contraseña FROM doctores WHERE NombUsuario = ?', [nombU], (err, doctores) =>{
			if(err){
				res.json(err);
			}
			const contra_doct = cryptr.decrypt(doctores[0].Contraseña);

			console.log('Decifrada'+contra_doct);

			if (doctores.length == 0 || contra_doct != contra){
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