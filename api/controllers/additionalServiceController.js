const mongoose = require('mongoose');
AdditionalService = mongoose.model('AdditionalService');

function listServices(req, res) {
  AdditionalService.find()
    .then(services => res.send(services))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving services."
      });
    });
};

function readService(req, res) {
  AdditionalService.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading services."
      });
    });
};

function createService(req, res) {
  const new_service = new AdditionalService(req.body);
  new_service.save()
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while creating services."
      });
    });
};

function updateService(req, res) {
  AdditionalService.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(service => {
      if (!service) {
        return res.status(404).send({
          message: "Service not found with id " + req.params.id
        });
      }
      res.send(service)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong updating service with id " + req.params.id
      });
    });
};

function deleteService(req, res) {
  AdditionalService.findByIdAndRemove(req.params.id)
    .then(service => {
      if (!service) {
        return res.status(404).send({
          message: "Session not found with id " + req.params.id
        });
      }
      res.send({ message: "Service deleted successfully!" });
    })
    .catch(error => {
      return res.status(500).send({
        message: "Could not delete service with id " + req.params.id
      });
    });
};

module.exports = {
  listServices,
  readService,
  createService,
  deleteService,
  updateService
}
