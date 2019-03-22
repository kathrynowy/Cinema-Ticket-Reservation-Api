const mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');


function listMovies(req, res) {
  Movie.find({}, function (error, movies) {
    res.status(200).json(movies);
  });
};

function readMovie(req, res) {
  Movie.findById(req.params.id, function (error, movie) {
    if (error) {
      res.send(error);
    }
    res.json(movie);
  });
};

function createMovie(req, res) {
  const newMovie = new Movie(req.body);
  newMovie.save(function (error, movie) {
    if (error) {
      res.send(error);
    }
    res.json(movie);
  });
};

function updateMovie(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (error, movie) {
    if (error) {
      res.send(error);
    }
    res.json(movie);
  });
};

function deleteMovie(req, res) {
  Movie.remove({ id: req.params.id }, function (error) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Movie successfully deleted' });
  });
};

module.exports = {
  listMovies,
  readMovie,
  createMovie,
  deleteMovie,
  updateMovie
}
