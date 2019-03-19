const mongoose = require('mongoose'),
  AdditionalServiceSchema = mongoose.model('AdditionalServiceSchema');


function listСinemas(req, res) {
  AdditionalServiceSchema.find({}, function (err, cinema) {
    if (err) {
      res.send(err);
    }
    res.json(cinema);

  });
};

function readСinema(req, res) {
  AdditionalServiceSchema.findById(req.params.id, function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function createСinema(req, res) {
  const new_cinema = new AdditionalServiceSchema(req.body);
  new_cinema.save(function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function updateAdditionalServiceSchema(req, res) {
  AdditionalServiceSchema.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, cinema) {
    if (err) {
      res.send(err);
    }
    res.json(cinema);
  });
};

function deleteСinema(req, res) {
  AdditionalServiceSchema.remove({
    _id: req.params.id
  }, function (err, cinema) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json({ message: 'AdditionalServiceSchema successfully deleted' });
  });
};

module.exports = {
  listAdditionalServiceSchema,
  readAdditionalServiceSchema,
  createAdditionalServiceSchema,
  deleteAdditionalServiceSchema,
  updateAdditionalServiceSchema
}
