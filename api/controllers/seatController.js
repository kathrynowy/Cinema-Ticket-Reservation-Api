const mongoose = require('mongoose');
SelectedSeat = mongoose.model('SelectedSeat');

async function selectSeat(req, res) {
  const seat = await SelectedSeat.findOne({
    cinemaId: req.body.cinemaId,
    hallId: req.body.hallId,
    movieId: req.body.movieId,
    time: req.body.time,
    row: req.body.row,
    seat: req.body.seat
  });

  if (seat) {
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
    const newSeat = new SelectedSeat(req.body);
    newSeat.save()
      .then(result => {
        const timer = setTimeout(() => deleteSeats(result.userId, req, res), 8000);
        res.send(result)
      })
      .catch(error => {
        res.status(500).send({
          message: "Something wrong while selecting seat."
        });
      });
  }
};

function deleteSeats(userId) {
  console.log(userId + ' userId');
  SelectedSeat.deleteMany({ userId })
    .then(result => {
      console.log('deleted success ' + result)
    })
    .catch(error => console.log('error ' + error))
}

function clearBooking(req, res) {
  selectSeat.deleteMany({ userId: req.body.userId })
    .then(result => {
      console.log('deleted success ' + result)
    })
    .catch(error => console.log('error ' + error))
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
