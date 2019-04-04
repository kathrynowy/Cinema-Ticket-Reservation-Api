const mongoose = require('mongoose');
Cinema = mongoose.model('Cinema');
Hall = mongoose.model('Hall');

function listСinemas(req, res) {
  if (req.query.city) {
    Cinema.find({ city: req.query.city })
      .then(cinemas => res.send(cinemas))
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong while retrieving cinemas."
        });
      });
  } else {
    Cinema.find()
      .then(cinemas => res.send(cinemas))
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong while retrieving cinemas."
        });
      });
  }

};

async function addCinemaWithHalls(req, res) {
  try {
    const halls = req.body.halls;
    const newСinema = new Cinema(req.body.cinema);
    const cinema = await newСinema.save();
    const newHalls = halls.map(hall => {
      return { cinemaId: cinema._id, hall: hall.hall, name: hall.name }
    });
    const insertHalls = await Hall.insertMany(newHalls);
    const result = {
      cinema,
      halls: insertHalls
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something wrong while creating cinemas and halls."
    });
  };
}

function readСinema(req, res) {
  Cinema.findById(req.params.id)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading cinemas."
      });
    });
};

function updateCinema(req, res) {
  Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(cinema => {
      if (!cinema) {
        return res.status(404).send({
          message: "Cinema not found with id " + req.params.id
        });
      }
      res.send(cinema)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong updating cinema with id " + req.params.id
      });
    });
};

function deleteСinema(req, res) {
  Cinema.findByIdAndRemove(req.params.id)
    .then(cinema => {
      if (!cinema) {
        return res.status(404).send({
          message: "Session not found with id " + req.params.id
        });
      }
      res.send({ message: "Cinema deleted successfully!" });
    })
    .catch(error => {
      return res.status(500).send({
        message: "Could not delete cinema with id " + req.params.id
      });
    });
};

module.exports = {
  listСinemas,
  readСinema,
  createСinema,
  deleteСinema,
  updateCinema,
  addCinemaWithHalls
}
