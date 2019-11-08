const express = require('express');
const router = express.Router();

const cita_updateController = require('../controllers/cita_updateController.js');

router.get('/:idDoc/cita_update.ejs/:idPac/:idFch', cita_updateController.list);
router.post('/:idDoc/cita_update.ejs/:idFch/updateCita', cita_updateController.update);

module.exports = router;