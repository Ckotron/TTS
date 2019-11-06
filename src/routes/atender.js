const express = require('express');
const router = express.Router();

const atenderController = require('../controllers/atenderController.js');

router.get('/:idDoc/atender.ejs/:idPac/:idFch', atenderController.list);

module.exports = router;