const express = require('express');
const router = express.Router();

const phq_9Controller = require('../controllers/phq_9Controller.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/phq_9.ejs', phq_9Controller.list);
router.post('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/cuest3', phq_9Controller.save);

module.exports = router;