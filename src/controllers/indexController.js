const controller = {};

controller.list = (req,res) =>{
	req.getConnection((err,conn) =>{
		conn.query('SELECT idPaciente, Nombre, ApPaterno, ApMaterno FROM pacientes', (err, index) =>{
			if(err){
				res.json(err);
			}
			res.render('index', {
				data: index
			});
		});
	});
};

controller.rendering = (req,res) =>{
	res.render('reg_pac');
};

module.exports = controller;