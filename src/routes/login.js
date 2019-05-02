const express = require('express');
const router = express.Router();

const doctoresController = require('../controllers/loginController.js');

router.get('/login.ejs',doctoresController.rendering);
router.post('/pacientes.ejs', doctoresController.list);

module.exports = router;