const express = require('express');
const router = express.Router();

const reg_doctController = require('../controllers/reg_doctController.js');

router.get('/login.ejs/reg_doct.ejs', reg_doctController.rendering);
router.post('/login.ejs',reg_doctController.save);

//No sabemos que ocurría, pero ya funciona
//router.post('/login.ejs',reg_doctController.save1);
//router.post('/login.ejs',reg_doctController.save2);


module.exports = router;