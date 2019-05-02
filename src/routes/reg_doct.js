const express = require('express');
const router = express.Router();

const reg_doctController = require('../controllers/reg_doctController.js');

router.get('/login.ejs/reg_doct.ejs', reg_doctController.rendering);
router.post('/login.ejs',reg_doctController.save);

module.exports = router;