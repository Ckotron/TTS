const express = require('express');
const router = express.Router();

const reg_citaController = require('../controllers/reg_citaController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/reg_cita.ejs', reg_citaController.rendering);
router.post('/pacientes.ejs/info_paciente.ejs/:id/reg_cita.ejs/add_cita',reg_citaController.save);

module.exports = router;