const express = require('express');
const router = express.Router();

const ini_cuestController = require('../controllers/ini_cuestController.js');

router.get('/:idDoc/atender.ejs/ini_cuest.ejs/:idPac/:idFch', ini_cuestController.list);

module.exports = router;