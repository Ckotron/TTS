const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('Ini_cuest');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, idDoctor FROM Pacientes WHERE idPaciente = ? and idDoctor = ?', [idPac,idDoc], (err, cuest) =>{
			if(err){
				res.json(err);
			}
			res.render('ini_cuest', {
				data: cuest,
				fch: idFch
			});
		});
	});
};

module.exports = controller;