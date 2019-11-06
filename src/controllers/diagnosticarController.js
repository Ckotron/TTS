const controller = {};
let idPac = -1;
let idDoc = -1;
let idFch = -1;

controller.list = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('Diag');
	console.log(idPac);
	console.log(idDoc);
	console.log(idFch);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, idDoctor, Nombre, ApPaterno, ApMaterno FROM Pacientes WHERE idPaciente = ? and idDoctor = ?', [idPac,idDoc], (err, diag) =>{
			if(err){
				res.json(err);
			}
			res.render('diagnosticar', {
				data: diag,
				fch: idFch
			});
		});
	});

};

controller.update = (req,res) =>{
	idPac = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	console.log('Diag');
	console.log(idPac);
	console.log(idDoc);

	const diag = req.body.diagnostico;
	req.getConnection((err,conn) =>{
		conn.query('UPDATE Aplicacion SET Observaciones=? WHERE idPaciente=? AND Fecha=?',[diag,idPac,idFch],(err, resultado) => {
			res.redirect('/'+idDoc+'/atender.ejs/'+idPac+'/'+idFch);
		});
	});
};

module.exports = controller;