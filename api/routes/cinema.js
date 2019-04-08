const express = require('express');
const router = express.Router();
const passport = require('passport');


const cinemaController = require('../controllers/cinemaController');

router.route('/cinemas')
  .get(cinemaController.listСinemas)
  .post(cinemaController.addCinemaWithHalls);

router.route('/cinemas/:id')
  .get(passport.authenticate('jwt', { session: false }), cinemaController.readСinema)
  .put(cinemaController.updateCinema)
  .delete(cinemaController.deleteСinema);

module.exports = router;
