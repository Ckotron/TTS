const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('PHQ_2');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, idDoctor FROM pacientes WHERE idPaciente = ?', [idPac], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('phq_2', {
				data: idpaciente,
				fch: idFch
			});
		});
	});
};

controller.save = (req,res) =>{
	console.log('PHQ_2_SAVE');

	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	//const Fecha = req.body.Fch; //Pendiente jalar fecha
	const idPregunta1 = 1;
	const idPregunta2 = 2;
	const idDimension = 2;
	const idCuestionario = 2;

	const P1 = req.body.P1;
	const P2 = req.body.P2;



	//console.log(nombre);//Descomentar para probar en consola y comentar todo el bloque siguiente.
	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P1, idPregunta1,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('INSERT INTO respuestaspacientes (idPaciente, Fecha, idRespuesta, idPregunta, idDimension, idCuestionario) VALUES(?,(SELECT CURRENT_DATE()),?,?,?,?);', [idPac, P2, idPregunta2,idDimension,idCuestionario], (err, cuest) =>{
			console.log(cuest);
		});
	});

	req.getConnection((err,conn) =>{
		conn.query('CALL CalificaCuestionario2(?,(SELECT CURRENT_DATE()))', [idPac], (err, cuest) =>{
			console.log(cuest);
		});
	});

	res.redirect('/'+idDoc+'/atender.ejs/ini_cuest.ejs/'+idPac+'/'+idFch);
};

module.exports = controller;