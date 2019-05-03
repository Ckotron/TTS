const controller = {};
let id = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	console.log('Cita_list');
	console.log(id);

	req.getConnection((err,conn) =>{
		conn.query('SELECT idCita, Fecha, idPaciente FROM cita WHERE idPaciente = ?', [id], (err, cita) =>{
			if(err){
				res.json(err);
			}
			if(cita.length>0){
				res.render('cita', {
					data: cita				
				});	
			}else{
				res.send('No hay citas registradas');
			}
			
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

controller.delete = (req,res) =>{
	const idCi = req.params.idC

	req.getConnection((err,conn) =>{
		conn.query('DELETE FROM cita WHERE idCita = ?', [idCi], (err, paciente) =>{
			if(err){
				res.json(err);
			}
			res.redirect('/pacientes.ejs/info_paciente.ejs/'+id);
		});
	});
};

module.exports = controller;