module.exports = function (app) {
  const cinemaController = require('../controllers/cinemaController');
  const movieController = require('../controllers/movieController');
  const sessionController = require('../controllers/sessionController');

  app.route('/cinemas')
    .get(cinemaController.listСinemas)
    .post(cinemaController.createСinema);

  app.route('/cinemas/:id')
    .get(cinemaController.readСinema)
    .put(cinemaController.updateCinema)
    .delete(cinemaController.deleteСinema);

  app.route('/movies')
    .get(movieController.listMovies)
    .post(movieController.createMovie);

  app.route('/movies/:id')
    .get(movieController.readMovie)
    .put(movieController.updateMovie)
    .delete(movieController.deleteMovie);

  app.route('/sessions')
    .get(sessionController.listSessions)
    .post(sessionController.createSession);

  app.route('/sessions/:id')
    .get(sessionController.readSession)
    .put(sessionController.updateSession)
    .delete(sessionController.deleteSession);
}

