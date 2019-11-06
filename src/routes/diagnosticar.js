const express = require('express');
const router = express.Router();

const diagnosticarController = require('../controllers/diagnosticarController.js');

router.get('/:idDoc/atender.ejs/diagnosticar.ejs/:idPac/:idFch', diagnosticarController.list);
router.post('/:idDoc/atender.ejs/:idPac/:idFch/upd', diagnosticarController.update);

module.exports = router;