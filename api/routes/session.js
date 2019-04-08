const express = require('express');
const router = express.Router();
const passport = require('passport');

const sessionController = require('../controllers/sessionController');

router.route('/sessions')
  .get(sessionController.listSessions)
  .post(sessionController.createSession);

router.route('/sessions/:id')
  .get(sessionController.readSession)
  .put(sessionController.updateSession)
  .delete(sessionController.deleteSession);

module.exports = router;
