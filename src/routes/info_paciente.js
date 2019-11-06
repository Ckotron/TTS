const express = require('express');
const router = express.Router();

const info_pacienteController = require('../controllers/info_pacienteController.js');

router.get('/:idDoc/pacientes.ejs/info_paciente.ejs/:id', info_pacienteController.list);
router.get('/:idDoc/pacientes.ejs/info_paciente.ejs/:id/deletePac', info_pacienteController.delete);

module.exports = router;