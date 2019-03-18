const mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');


function listMovies(req, res) {
  Movie.find({}, function (err, movies) {
    if (err) {
      res.send(err);
    }
    res.json(movies);
  });
};

function readMovie(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

function createMovie(req, res) {
  const new_movie = new Movie(req.body);
  new_movie.save(function (err, movie) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

function updateMovie(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, movie) {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

function deleteMovie(req, res) {
  Movie.remove({
    _id: req.params.id
  }, function (err, movie) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
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
