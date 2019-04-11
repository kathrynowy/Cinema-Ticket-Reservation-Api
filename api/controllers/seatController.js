const mongoose = require('mongoose');
SelectedSeat = mongoose.model('SelectedSeat');
BoughtTicket = mongoose.model('BoughtTicket');


let timer = '';

async function selectSeat(req, res) {
  const selectedSeat = {
    cinemaId: req.body.cinemaId,
    hallId: req.body.hallId,
    movieId: req.body.movieId,
    time: req.body.time,
    row: req.body.row,
    seat: req.body.seat,
    userId: req.body.userId
  };
  const seatForCompare = {
    cinemaId: req.body.cinemaId,
    hallId: req.body.hallId,
    movieId: req.body.movieId,
    time: req.body.time,
    row: req.body.row,
    seat: req.body.seat
  }
  const boughtSeat = await BoughtTicket.findOne(seatForCompare);
  if (!boughtSeat) {
    const seat = await SelectedSeat.findOne(seatForCompare);
    if (seat) {
      if (selectedSeat.userId == seat.userId) {
        SelectedSeat.findByIdAndRemove(seat.id)
          .then(result => {
            res.send(result)
          })
          .catch(error => {
            res.status(500).send({
              message: "Something wrong while deleting seat."
            });
          });
      } else {
        res.status(500).send({
          message: "Something wrong while deleting seat."
        });
      }
    } else {
      const newSeat = new SelectedSeat(selectedSeat);
      newSeat.save()
        .then(result => {
          timer = setTimeout(() => deleteSeats(result.userId, req, res), 1200000);
          res.send(result);
        })
        .catch(error => {
          res.status(500).send({
            message: "Something wrong while selecting seat."
          });
        });
    }
  } else {
    res.status(500).send({
      message: "Something wrong while selecting seat."
    });
  }
};

function deleteSeats(userId) {
  SelectedSeat.deleteMany({ userId });
}


function clearBooking(req, res) {
  const userId = req.body.userId;
  SelectedSeat.deleteMany({ userId })
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something is wrong"
      })
    })
}

function listSelectedSeats(req, res) {
  SelectedSeat.find({
    cinemaId: req.query.cinemaId,
    hallId: req.query.hallId,
    movieId: req.query.movieId,
    time: req.query.time
  })
    .then(selectedSeats => res.send(selectedSeats))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while reading selected seats."
      });
    });
};

module.exports = {
  selectSeat,
  listSelectedSeats,
  clearBooking
}
