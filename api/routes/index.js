module.exports = function (app) {
  const cinemaController = require('../controllers/cinemaController');

  app.route('/cinemas')
    .get(cinemaController.listСinemas)
    .post(cinemaController.createСinema);

  app.route('/cinemas/:id')
    .get(cinemaController.readСinema)
    .put(cinemaController.updateCinema)
    .delete(cinemaController.deleteСinema);
}

