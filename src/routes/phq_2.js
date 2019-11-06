const express = require('express');
const router = express.Router();

const phq_2Controller = require('../controllers/phq_2Controller.js');

router.get('/:idDoc/atender.ejs/ini_cuest.ejs/phq_2.ejs/:idPac/:idFch', phq_2Controller.list);
router.post('/:idDoc/atender.ejs/ini_cuest.ejs/phq_2.ejs/:idPac/cuest2', phq_2Controller.save);

module.exports = router;