const mongoose = require('mongoose');
BoughtTicket = mongoose.model('BoughtTicket');


function listBoughtTickets(req, res) {
  BoughtTicket.find({}, function (err, tickets) {
    if (err) {
      res.send(err);
    }
    res.json(tickets);
  });
};

function buyTickets(req, res, next) {
  BoughtTicket.findByIdAndUpdate("5c910673790c625dc8ec09e", { $push: { boughtTickets: req.body.tickets } },
    function (error, result) {
      if (error) return next(error);
      res.json(result);
    });
};

module.exports = {
  buyTickets,
  listBoughtTickets
}
