module.exports = function (app) {
  const cinemaController = require('../controllers/cinemaController');
  const movieController = require('../controllers/movieController');
  const sessionController = require('../controllers/sessionController');
  const hallController = require('../controllers/hallController');
  const additionalServiceController = require('../controllers/additionalServiceController');
  const ticketController = require('../controllers/ticketController');


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

  app.route('/halls')
    .get(hallController.listHalls)
    .post(hallController.createHall);

  app.route('/halls/:id')
    .get(hallController.readHall)
    .put(hallController.updateHall)
    .delete(hallController.deleteHall);

  app.route('/halls/cinema/:id')
    .get(hallController.findHalls);

  app.route('/additionalServices')
    .get(additionalServiceController.listServices)
    .post(additionalServiceController.createService);

  app.route('/additionalServices/:id')
    .get(additionalServiceController.readService)
    .put(additionalServiceController.updateService)
    .delete(additionalServiceController.deleteService);

  app.route('/buyTickets')
    .get(ticketController.listBoughtTickets)
    .put(ticketController.buyTickets);
}

