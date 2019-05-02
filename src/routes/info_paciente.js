const express = require('express');
const router = express.Router();

const info_pacienteController = require('../controllers/info_pacienteController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id', info_pacienteController.list);
router.get('/pacientes.ejs/info_paciente.ejs', info_pacienteController.delete);

module.exports = router;