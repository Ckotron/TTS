const express = require('express');
const router = express.Router();

const pacientes_archController = require('../controllers/pacientes_archController.js');

//router.get('/:idDoc/pacientes.ejs', pacientes_archController.rendering);
router.get('/:idDoc/pacientes_arch.ejs', pacientes_archController.list);
router.get('/:idDoc/pacientes_arch.ejs/:idPac/activar',pacientes_archController.update);

module.exports = router;