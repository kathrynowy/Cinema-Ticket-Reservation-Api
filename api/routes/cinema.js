const express = require('express');
const router = express.Router();
const passport = require('passport');


const cinemaController = require('../controllers/cinemaController');

router.route('/cinemas').get(cinemaController.listСinemas).post(cinemaController.addCinemaWithHalls);
router.get('/cinemas/:id', passport.authenticate('jwt', { session: false }), cinemaController.readСinema);
router.route('/cinemas/:id').put(cinemaController.updateCinema).delete(cinemaController.deleteСinema);

module.exports = router;
