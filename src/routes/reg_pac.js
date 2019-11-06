const express = require('express');
const router = express.Router();

const reg_pacController = require('../controllers/reg_pacController.js');

router.get('/:idDoc/reg_pac.ejs', reg_pacController.rendering);
router.post('/:idDoc/pacientes.ejs/add_pac',reg_pacController.save);

module.exports = router;