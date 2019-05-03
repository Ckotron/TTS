const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;

	req.getConnection((err,conn) =>{
		conn.query('SELECT * FROM cita WHERE idPaciente = ?', [id], (err, upd_cita) =>{
			if(err){
				res.json(err);
			}
			res.render('cita_update', {
				data: upd_cita
			});
		});
	});
};

controller.update = (req,res) =>{
	id = req.params.id;
	//console.log('Update');
	//console.log(id);

	const fch = req.body.Fecha;

	req.getConnection((err,conn) =>{
		conn.query('UPDATE cita SET Fecha = ? WHERE idPaciente = ?', [fch,id], (err, pacientes) =>{
			res.redirect('/pacientes.ejs/info_paciente.ejs/'+ id);
		});
	});
};
module.exports = controller;