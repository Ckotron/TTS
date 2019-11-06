const express = require('express');
const router = express.Router();

const histclinicoController = require('../controllers/histclinicoController.js');

router.get('/:idDoc/histclinico.ejs', histclinicoController.list);

module.exports = router;