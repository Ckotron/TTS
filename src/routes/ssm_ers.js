const express = require('express');
const router = express.Router();

const ssm_ersController = require('../controllers/ssm_ersController.js');

router.get('/:idDoc/atender.ejs/ini_cuest.ejs/ssm_ers.ejs/:idPac/:idFch', ssm_ersController.list);
router.post('/:idDoc/atender.ejs/ini_cuest.ejs/ssm_ers.ejs/:idPac/cuest1', ssm_ersController.save);

module.exports = router;