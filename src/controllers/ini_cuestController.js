const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;

	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente FROM pacientes WHERE idPaciente = ?', [id], (err, idpaciente) =>{
			if(err){
				res.json(err);
			}
			res.render('ini_cuest', {
				data: idpaciente
			});
		});
	});
};

module.exports = controller;