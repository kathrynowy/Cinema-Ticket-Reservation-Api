const mongoose = require('mongoose'),
  BoughtTicket = mongoose.model('BoughtTicket');


function listBoughtTickets(req, res) {
  BoughtTicket.find({}, function (err, tickets) {
    if (err) {
      res.send(err);
    }
    res.json(tickets);
  });
};

function buyTickets(req, res) {
  BoughtTicket.findByIdAndUpdate("5c910673790c625dc8ec009e", { $push: { boughtTickets: req.body.tickets[0] } },
    function (error, result) {
      if (error) {
        console.log('something wrong!')
      }
      console.log(result + 'ggf');
      res.json(result);
    });
};

module.exports = {
  buyTickets,
  listBoughtTickets
}
