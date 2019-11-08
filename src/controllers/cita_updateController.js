const controller = {};
let id = -1;
let idFch = -1;
let idDoc = -1;


controller.list = (req,res) =>{
	id = req.params.idPac;
	idDoc = req.params.idDoc;
	idFch = req.params.idFch;

	req.getConnection((err,conn) =>{
		conn.query('SELECT Fecha, HoraInicio, HoraFinal, Observaciones, idPaciente FROM Aplicacion WHERE idPaciente = ? AND Fecha = ?', [id,idFch], (err, upd_cita) =>{
			if(err){
				res.json(err);
			}
			res.render('cita_update', {
				data: upd_cita,
				doc: idDoc,
				fch: idFch
			});
		});
	});
};

controller.update = (req,res) =>{

	const newHoraIni = req.body.HoraInicio;

	req.getConnection((err,conn) =>{
		conn.query('UPDATE Aplicacion SET HoraInicio = ? WHERE idPaciente = ?', [newHoraIni, id], (err, pacientes) =>{
			if(err){
				res.json(err);
			}
			res.redirect('/'+idDoc+'/visuacit.ejs');
		});
	});
};
module.exports = controller;