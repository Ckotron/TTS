const express = require('express');
const router = express.Router();

const ini_cuestController = require('../controllers/ini_cuestController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/ini_cuest.ejs', ini_cuestController.list);

module.exports = router;