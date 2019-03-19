const mongoose = require('mongoose');
Hall = mongoose.model('Hall');


function listHalls(req, res) {
  Hall.find({}, function (error, hall) {
    if (error) {
      res.send(error);
    }
    res.json(hall);
  });
};

function readHall(req, res) {
  Hall.findById(req.params.id, function (error, hall) {
    if (error) {
      res.send(error);
    }
    res.json(hall);
  });
};

function createHall(req, res) {
  const newHall = new Hall(req.body);
  newHall.save(function (error, hall) {
    if (error) {
      res.send(error);
    }
    res.json(hall);
  });
};

function updateHall(req, res) {
  Hall.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (error, hall) {
    if (error) {
      res.send(error);
    }
    res.json(hall);
  });
};

function deleteHall(req, res) {
  Hall.remove({ id: req.params.id }, function (error, hall) {
    if (error) {
      res.send(error);
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
