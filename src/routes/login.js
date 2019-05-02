const express = require('express');
const router = express.Router();

const doctoresController = require('../controllers/loginController.js');

router.get('/login.ejs', doctoresController.rendering);

module.exports = router;