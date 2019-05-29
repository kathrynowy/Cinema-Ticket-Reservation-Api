const express = require('express');
const router = express.Router();
const passport = require('passport');

const ticketController = require('../controllers/ticketController');

router.route('/buyTickets')
  .get(passport.authenticate('jwt', { session: false }), ticketController.listBoughtTickets)
  .put(passport.authenticate('jwt', { session: false }), ticketController.buyTickets);

router.route('/deleteTickets')
  .delete(ticketController.deleteAll);

module.exports = router;
