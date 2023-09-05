const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* Get home page */
router.get('/', ctrlMain.index);

module.exports = router;
