const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;

	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM pacientes WHERE idPaciente = ?', [id], (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.render('info_paciente', {
				data: paciente
			});
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

controller.delete = (req,res) =>{
	req.getConnection((err,conn) =>{
		conn.query('DELETE FROM pacientes WHERE idPaciente = ?', [id], (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.redirect('/pacientes.ejs');
		});
	});
};

module.exports = controller;