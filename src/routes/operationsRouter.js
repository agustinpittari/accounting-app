const express = require('express');
const router = express.Router();

const mainController = require('../controllers/operationsController')

router.get('/list', mainController.list)
router.get('/:typeId', mainController.byType)
router.post('/create', mainController.create)


module.exports = router