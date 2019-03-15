module.exports = function (app) {
  const cinemaController = require('../controllers/cinemaController');

  app.route('/cinemas')
    .get(cinemaController.cinema_list_get)

  app.route('cinemas/:id')
    .put(cinemaController.cinema_find_byid)

}

