const mongoose = require('mongoose');
Cinema = mongoose.model('Cinema');


function listСinemas(req, res) {
  Cinema.find({}, function (error, cinemas) {
    if (error) {
      res.send(error);
    }
    res.json(cinemas);
  });
};

function readСinema(req, res) {
  Cinema.findById(req.params.id, function (error, cinema) {
    if (error) {
      res.send(error);
    }
    res.json(cinema);
  });
};

function createСinema(req, res) {
  const newСinema = new Cinema(req.body);
  newСinema.save(function (error, cinema) {
    if (error) {
      res.send(error);
    }
    res.json(cinema);
  });
};

function updateCinema(req, res) {
  Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (error, cinema) {
    if (error) {
      res.send(error);
    }
    res.json(cinema);
  });
};

function deleteСinema(req, res) {
  Cinema.remove({ id: req.params.id }, function (error, cinema) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Cinema successfully deleted' });
  });
};

module.exports = {
  listСinemas,
  readСinema,
  createСinema,
  deleteСinema,
  updateCinema
}
