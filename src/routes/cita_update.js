const express = require('express');
const router = express.Router();

const cita_updateController = require('../controllers/cita_updateController.js');

router.get('/pacientes.ejs/info_paciente.ejs/:id/cita.ejs/:idC/cita_update.ejs', cita_updateController.list);
router.post('/pacientes.ejs/info_paciente.ejs/:id/cita.ejs/:idC/cita_update.ejs/updateCita', cita_updateController.update);

module.exports = router;