const express = require('express');
const router = express.Router();
const passport = require('passport');

const cinemaController = require('../controllers/cinemaController');
const movieController = require('../controllers/movieController');
const sessionController = require('../controllers/sessionController');
const hallController = require('../controllers/hallController');
const ticketController = require('../controllers/ticketController');

function checkUser(req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (!user || !err == null) {
      return res.status(401).json({
        errorMessage: 'You are not authorized'
      });
    }

    req.user = user;
    next();
  })(req, res, next);
}

router.get('/cinemas', cinemaController.listСinemas);
router.post('/cinemas', cinemaController.addCinemaWithHalls);


router.get('/cinemas/:id', cinemaController.readСinema);
router.put('/cinemas/:id', cinemaController.updateCinema);
router.delete('/cinemas/:id', cinemaController.deleteСinema);


router.get('/movies', movieController.listMovies);
router.post('/movies', movieController.createMovie);


router.get('/movies/:id', movieController.readMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);


router.get('/sessions', sessionController.listSessions);
router.post('/sessions', sessionController.createSession);


router.get('/sessions/:id', sessionController.readSession);
router.put('/sessions/:id', sessionController.updateSession);
router.delete('/sessions/:id', sessionController.deleteSession);


router.get('/halls', hallController.listHalls);
router.post('/halls', hallController.createHall);


router.get('/halls/:id', hallController.readHall);
router.put('/halls/:id', hallController.updateHall);
router.delete('/halls/:id', hallController.deleteHall);


router.get('/cinema/:id/halls', hallController.findHalls);


router.get('/buyTickets', ticketController.listBoughtTickets);
router.put('/buyTickets', ticketController.buyTickets);

module.exports = router;
