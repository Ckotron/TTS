const express = require('express');
const router = express.Router();

const listResultadoController = require('../controllers/listResultadoController.js');

router.get('/:idDoc/histclinico.ejs/listResultado.ejs/:idPac/:idFch', listResultadoController.list);

module.exports = router;