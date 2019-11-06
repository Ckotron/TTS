const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

router.get('/:idDoc/index.ejs', indexController.rendering);

module.exports = router;