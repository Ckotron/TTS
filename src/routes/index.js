const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

router.get('/index.ejs', indexController.list);
router.get('/reg_pac.ejs', indexController.rendering);

module.exports = router;