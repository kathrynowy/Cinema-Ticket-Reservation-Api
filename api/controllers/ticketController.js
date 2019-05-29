const mongoose = require('mongoose');
BoughtTicket = mongoose.model('BoughtTicket');


function listBoughtTickets(req, res) {
  if (req.query.info) {
    BoughtTicket.find({ userId: req.user.id })
      .populate('cinemaId')
      .populate('hallId')
      .populate('movieId')
      .then(tickets => res.send(tickets))
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong while retrieving tickets."
        });
      });
  } else {
    BoughtTicket.find()
      .then(tickets => res.send(tickets))
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong while retrieving tickets."
        });
      });
  }
};

function deleteAll(req, res) {
  BoughtTicket.remove({})
    .then(result => {
      console.log('success');
      res.send(result)
    })
    .catch(error => console.log(error));
};



function buyTickets(req, res, next) {
  BoughtTicket.insertMany(req.body.tickets)
    .then(result => res.send(result))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while buying tickets."
      });
    });
};

module.exports = {
  buyTickets,
  listBoughtTickets,
  deleteAll
}
