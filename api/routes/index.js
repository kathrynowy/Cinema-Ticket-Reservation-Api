const express = require('express');
const router = express.Router();

router.use('/', require('./ticket'));
router.use('/', require('./user'));
router.use('/', require('./cinema'));
router.use('/', require('./movie'));
router.use('/', require('./session'));
router.use('/', require('./hall'));

module.exports = router;
