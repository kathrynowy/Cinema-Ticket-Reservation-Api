const express = require('express');
const router = express.Router();


const seatController = require('../controllers/seatController');

router.route('/seats')
  .get(seatController.listSelectedSeats)
  .delete(seatController.clearBooking);

module.exports = router;
