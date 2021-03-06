const express = require('express');
const router = express.Router();

const doctoresController = require('../controllers/loginController.js');

router.get('/login.ejs',doctoresController.rendering);
router.post('/:idDoc/index.ejs', doctoresController.list);

module.exports = router;