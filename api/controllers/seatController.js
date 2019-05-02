const mongoose = require('mongoose');
SelectedSeat = mongoose.model('SelectedSeat');
BoughtTicket = mongoose.model('BoughtTicket');


let timer = '';
const millisecondsForTimer = 1200000;

async function selectSeat(seat) {
  const selectedSeat = {
    cinemaId: seat.cinemaId,
    hallId: seat.hallId,
    movieId: seat.movieId,
    time: seat.time,
    row: seat.row,
    seat: seat.seat,
    userId: seat.userId,
    cost: seat.cost
  };
  const seatForCompare = {
    cinemaId: seat.cinemaId,
    hallId: seat.hallId,
    movieId: seat.movieId,
    time: seat.time,
    row: seat.row,
    seat: seat.seat
  }
  const boughtSeat = await BoughtTicket.findOne(seatForCompare);
  if (!boughtSeat) {
    const seat = await SelectedSeat.findOne(seatForCompare);
    if (seat) {
      if (selectedSeat.userId == seat.userId) {
        return SelectedSeat.findByIdAndRemove(seat.id)
      } else {
        return new Error('Сannot find seat by user id and remove!');
      }
    } else {
      const newSeat = new SelectedSeat(selectedSeat);
      return newSeat.save()
        .then(result => {
          timer = setTimeout(() => deleteSeats(result.userId), millisecondsForTimer);
          return result;
        })
    }
  } else {
    return new Error('Еhe seat has already been bougnt!');
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
  listSelectedSeats,
  clearBooking,
  selectSeat
}
