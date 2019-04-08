const express = require('express');
const router = express.Router();
const passport = require('passport');

const ticketController = require('../controllers/ticketController');

router.get('/buyTickets', ticketController.listBoughtTickets);
router.put('/buyTickets', passport.authenticate('jwt', { session: false }), ticketController.buyTickets);

module.exports = router;
