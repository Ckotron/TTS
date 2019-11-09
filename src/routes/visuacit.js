const express = require('express');
const router = express.Router();

const visuacitController = require('../controllers/visuacitController.js');

router.get('/:idDoc/visuacit.ejs', visuacitController.list);
router.get('/:idDoc/visuacit.ejs/:fch/:idPac/deleteVisuacita', visuacitController.delete);

module.exports = router;