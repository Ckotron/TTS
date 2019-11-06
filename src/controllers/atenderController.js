const controller = {};
let idDoc = -1;
let idPac = -1;
let idFch = -1;
let fch = -1;


controller.list = (req,res) =>{
	idDoc = req.params.idDoc;
	idPac = req.params.idPac;
	idFch = req.params.idFch;
	console.log('Atender');
	console.log(idDoc);
	console.log(idPac+'paciente');
	console.log(idFch+'fecha');

	req.getConnection((err,conn) =>{
		conn.query('SELECT idDoctor, idPaciente FROM Pacientes WHERE idDoctor = ? AND idPaciente = ?', [idDoc,idPac], (err, ate) =>{
			if(err){
				res.json(err);
			}
			res.render('atender', {
				data: ate,
				fecha: idFch
			});	
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

module.exports = controller;