const express = require('express');
const router = express.Router();

const rflController = require('../controllers/rflController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/rfl.ejs', rflController.list);
router.post('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs/cuest4', rflController.save);

module.exports = router;