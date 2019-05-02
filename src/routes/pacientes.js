const express = require('express');
const router = express.Router();

const pacientesController = require('../controllers/pacientesController.js');

router.get('/pacientes.ejs', pacientesController.list);

module.exports = router;