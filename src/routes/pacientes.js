const express = require('express');
const router = express.Router();

const pacientesController = require('../controllers/pacientesController.js');

//router.get('/:idDoc/pacientes.ejs', pacientesController.rendering);
router.get('/:idDoc/pacientes.ejs', pacientesController.list);

module.exports = router;