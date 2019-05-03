const express = require('express');
const router = express.Router();

const ssm_ersController = require('../controllers/ssm_ersController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/ssm_ers.ejs', ssm_ersController.list);
router.post('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/cuest1', ssm_ersController.save);

module.exports = router;