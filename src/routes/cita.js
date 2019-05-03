const express = require('express');
const router = express.Router();

const citaController = require('../controllers/citaController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/cita.ejs', citaController.list);
router.get('/pacientes.ejs/info_paciente.ejs/:id/cita.ejs/:idC/deleteCita', citaController.delete);

module.exports = router;