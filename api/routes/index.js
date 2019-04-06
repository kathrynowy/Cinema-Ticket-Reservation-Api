const express = require('express');
const router = express.Router();

router.use('/', require('./main'));
router.use('/', require('./user'));

module.exports = router;