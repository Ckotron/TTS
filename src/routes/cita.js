const express = require('express');
const router = express.Router();

const citaController = require('../controllers/citaController.js');

router.get('/:idDoc/pacientes.ejs/info_paciente.ejs/:id/cita.ejs', citaController.list);

module.exports = router;