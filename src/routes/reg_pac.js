const express = require('express');
const router = express.Router();

const reg_pacController = require('../controllers/reg_pacController.js');

router.get('/pacientes.ejs', reg_pacController.rendering);
router.post('/pacientes.ejs/add_pac',reg_pacController.save);

module.exports = router;