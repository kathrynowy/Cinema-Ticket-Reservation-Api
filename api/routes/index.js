const express = require('express');
const router = express.Router();

router.use('/', require('./ticket'));
router.use('/', require('./user'));
router.use('/', require('./cinema'));
router.use('/', require('./movie'));
router.use('/', require('./session'));
router.use('/', require('./hall'));
router.use('/', require('./seat'));
router.use('/', require('./payment'));

module.exports = router;
