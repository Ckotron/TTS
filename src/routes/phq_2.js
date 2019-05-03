const express = require('express');
const router = express.Router();

const phq_2Controller = require('../controllers/phq_2Controller.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/phq_2.ejs', phq_2Controller.list);
router.post('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/cuest2', phq_2Controller.save);

module.exports = router;