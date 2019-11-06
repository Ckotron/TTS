const express = require('express');
const router = express.Router();

const rflController = require('../controllers/rflController.js');

router.get('/:idDoc/atender.ejs/ini_cuest.ejs/rfl.ejs/:idPac/:idFch', rflController.list);
router.post('/:idDoc/atender.ejs/ini_cuest.ejs/rfl.ejs/:idPac/cuest4', rflController.save);

module.exports = router;