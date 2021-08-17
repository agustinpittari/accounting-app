const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/list', mainController.list)

module.exports = router