const mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');


function listMovies(req, res) {
  Movie.find()
    .then(movies => res.send(movies))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving movies."
      });
    });
};

function readMovie(req, res) {
  Movie.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading movies."
      });
    });
};

function createMovie(req, res) {
  const newMovie = new Movie(req.body);
  newMovie.save()
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while creating movies."
      });
    });
};

function updateMovie(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(movie => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found with id " + req.params.id
        });
      }
      res.send(movie)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong updating movie with id " + req.params.id
      });
    });
};

function deleteMovie(req, res) {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      if (!movie) {
        return res.status(404).send({
          message: "Movie not found with id " + req.params.id
        });
      }
      res.send({ message: "movie deleted successfully!" });
    })
    .catch(error => {
      return res.status(500).send({
        message: "Could not delete movie with id " + req.params.id
      });
    });
};

module.exports = {
  listMovies,
  readMovie,
  createMovie,
  deleteMovie,
  updateMovie
}
