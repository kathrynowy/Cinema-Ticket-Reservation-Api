const mongoose = require('mongoose'),
  AdditionalService = mongoose.model('AdditionalService');


function listServices(req, res) {
  AdditionalService.find({}, function (err, services) {
    if (err) {
      res.send(err);
    }
    res.json(services);

  });
};

function readService(req, res) {
  AdditionalService.findById(req.params.id, function (err, service) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(service);
  });
};

function createService(req, res) {
  const new_service = new AdditionalService(req.body);
  new_service.save(function (err, service) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(service);
  });
};

function updateService(req, res) {
  AdditionalService.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, service) {
    if (err) {
      res.send(err);
    }
    res.json(service);
  });
};

function deleteService(req, res) {
  AdditionalService.remove({
    _id: req.params.id
  }, function (err, service) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Service successfully deleted' });
  });
};

module.exports = {
  listServices,
  readService,
  createService,
  deleteService,
  updateService
}
