const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, Nombre, ApPaterno, ApMaterno FROM pacientes', (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.render('pacientes', {
				data: paciente
			});
		});
	});
};

module.exports = controller;