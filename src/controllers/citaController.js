const controller = {};
let id = -1;
let idDoc = -1;

controller.list = (req,res) =>{
	id = req.params.id;
	idDoc = req.params.idDoc;
	console.log('Cita_list');
	console.log(id);

	req.getConnection((err,conn) =>{
		conn.query('SELECT A.Fecha, A.HoraInicio, A.idPaciente FROM Aplicacion A WHERE idPaciente = ?', [id], (err, cita) =>{
			if(err){
				res.json(err);
			}
			if(cita.length>0){
				res.render('cita', {
					data: cita,
					doc: idDoc				
				});	
			}else{
				res.send('No hay citas registradas');
			}
			
		});
	});
	//res.render('info_paciente');//Prueba sin select por si no carga la página con el select
};

module.exports = controller;