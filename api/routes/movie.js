const express = require('express');
const router = express.Router();
const passport = require('passport');


const movieController = require('../controllers/movieController');

router.route('/movies')
  .get(movieController.listMovies)
  .post(movieController.createMovie);

router.route('/movies/:id')
  .get(movieController.readMovie)
  .put(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
