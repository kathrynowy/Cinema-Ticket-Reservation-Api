const mongoose = require('mongoose');
Hall = mongoose.model('Hall');


function listHalls(req, res) {
  Hall.find()
    .then(hall => res.send(hall))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving hall."
      });
    });
};

function readHall(req, res) {
  Hall.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading halls."
      });
    });
};

function createHall(req, res) {
  const newHall = new Hall(req.body);
  newHall.save()
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while creating halls."
      });
    });
};

function updateHall(req, res) {
  Hall.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(hall => {
      if (!hall) {
        return res.status(404).send({
          message: "Hall not found with id " + req.params.id
        });
      }
      res.send(hall)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong updating hall with id " + req.params.id
      });
    });
};

function deleteHall(req, res) {
  Hall.findByIdAndRemove(req.params.id)
    .then(hall => {
      if (!hall) {
        return res.status(404).send({
          message: "Hall not found with id " + req.params.id
        });
      }
      res.send({ message: "hall deleted successfully!" });
    })
    .catch(error => {
      return res.status(500).send({
        message: "Could not delete hall with id " + req.params.id
      });
    });
};

module.exports = {
  listHalls,
  readHall,
  createHall,
  deleteHall,
  updateHall
}
