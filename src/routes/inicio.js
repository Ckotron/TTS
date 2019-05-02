const express = require('express');
const router = express.Router();

const doctoresController = require('../controllers/inicioController.js');

router.get('/', doctoresController.rendering);

module.exports = router;