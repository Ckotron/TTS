const controller = {};
let id = -1;

controller.rendering = (req,res) =>{
	id = req.params.idDoc;
	console.log(id);
	res.render('index', {
		data: id
	});
};

module.exports = controller;