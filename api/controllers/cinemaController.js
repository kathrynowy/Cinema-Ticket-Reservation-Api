const mongoose = require('mongoose'),
  Cinema = mongoose.model('Cinema');


function listСinemas(req, res) {
  Cinema.find({}, function (err, cinemas) {
    if (err) {
      res.send(err);
    }
    res.json(cinemas);

  });
};

function readСinema(req, res) {
  Cinema.findById(req.params.id, function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function createСinema(req, res) {
  const new_cinema = new Cinema(req.body);
  new_cinema.save(function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function updateCinema(req, res) {
  Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, cinema) {
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function deleteСinema(req, res) {
  Cinema.remove({
    _id: req.params.id
  }, function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
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
