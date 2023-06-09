const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/panel', mainController.panel);

module.exports = router;
