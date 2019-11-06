const express = require('express');
const router = express.Router();

const pacientes_udpController = require('../controllers/pacientes_updController.js');

router.get('/:idDoc/pacientes.ejs/info_paciente.ejs/:id/pacientes_update.ejs', pacientes_udpController.list);
router.post('/:idDoc/pacientes.ejs/info_paciente.ejs/:id/updatePac', pacientes_udpController.update);

module.exports = router;