const express = require('express');
const router = express.Router();
const passport = require('passport');

const hallController = require('../controllers/hallController');

router.route('/halls')
  .get(hallController.listHalls)
  .post(hallController.createHall);

router.route('/halls/:id')
  .get(passport.authenticate('jwt', { session: false }), hallController.readHall)
  .put(hallController.updateHall)
  .delete(hallController.deleteHall);

router.get('/cinema/:id/halls', hallController.findHalls);

module.exports = router;
