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
  BoughtTicket.findByIdAndUpdate("5c910673790c625dc8ec009e", { $push: { boughtTickets: req.body.tickets } })
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
