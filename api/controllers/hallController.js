const mongoose = require('mongoose'),
  Hall = mongoose.model('Hall');


function listHalls(req, res) {
  Hall.find({}, function (err, hall) {
    if (err) {
      res.send(err);
    }
    res.json(hall);

  });
};

function readHall(req, res) {
  Hall.findById(req.params.id, function (err, hall) {
    if (err) {
      res.send(err);
    }
    res.json(hall);
  });
};

function createHall(req, res) {
  const new_hall = new Hall(req.body);
  new_hall.save(function (err, hall) {
    if (err) {
      res.send(err);
    }
    res.json(hall);
  });
};

function updateHall(req, res) {
  Hall.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, hall) {
    if (err) {
      res.send(err);
    }
    res.json(hall);
  });
};

function deleteHall(req, res) {
  Hall.remove({
    _id: req.params.id
  }, function (err, hall) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Hall successfully deleted' });
  });
};

module.exports = {
  listHalls,
  readHall,
  createHall,
  deleteHall,
  updateHall
}
