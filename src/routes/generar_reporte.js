const express = require('express');
const router = express.Router();

const generar_reporteController = require('../controllers/generar_reporteController.js');

router.get('/:idDoc/atender.ejs/generar_reporte.ejs/:idPac/:idFch', generar_reporteController.list);
router.post('/:idDoc/atender.ejs/:idPac/:idFch', generar_reporteController.update);

module.exports = router;