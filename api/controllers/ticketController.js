const mongoose = require('mongoose');
BoughtTicket = mongoose.model('BoughtTicket');


function listBoughtTickets(req, res) {
  BoughtTicket.find()
    .then(tickets => res.send(tickets))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving tickets."
      });
    });
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
  listBoughtTickets
}
