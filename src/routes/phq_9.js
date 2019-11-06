const express = require('express');
const router = express.Router();

const phq_9Controller = require('../controllers/phq_9Controller.js');

router.get('/:idDoc/atender.ejs/ini_cuest.ejs/phq_9.ejs/:idPac/:idFch', phq_9Controller.list);
router.post('/:idDoc/atender.ejs/ini_cuest.ejs/phq_9.ejs/:idPac/cuest3', phq_9Controller.save);

module.exports = router;