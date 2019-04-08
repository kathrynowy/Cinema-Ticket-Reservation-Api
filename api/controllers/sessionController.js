const mongoose = require('mongoose');
Session = mongoose.model('Session');


function listSessions(req, res) {
  Session.find()
    .populate('cinemaId')
    .populate('hallId')
    .populate('movieId')
    .then(session => res.send(session))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving sessions."
      });
    });
};

function readSession(req, res) {
  Session.findById(req.params.id)
    .then(session => res.send(session))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving sessions."
      });
    });
};

function createSession(req, res) {
  const newSession = new Session(req.body);
  newSession.save()
    .then(data => res.send(data))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while creating sessions."
      });
    });
};

function updateSession(req, res) {
  Session.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate('cinemaId')
    .populate('hallId')
    .populate('movieId')
    .then(session => {
      if (!session) {
        return res.status(404).send({
          message: "Session not found with id " + req.params.id
        });
      }
      res.send(session)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong updating session with id " + req.params.id
      });
    });
};

function deleteSession(req, res) {
  if (req.body.session.times.length > 1) {
    const newTimes = req.body.session.times.filter(time => time !== req.body.currentTime);
    const newSession = {
      movieId: req.body.session.movieId.id,
      cinemaId: req.body.session.cinemaId.id,
      hallId: req.body.session.hallId.id,
      id: req.body.session.id,
      times: newTimes
    }

    req.body.session = newSession;

    Session.findByIdAndUpdate(req.params.id, req.body.session, { new: true })
      .populate('cinemaId')
      .populate('hallId')
      .populate('movieId')
      .then(session => {
        if (!session) {
          return res.status(404).send({
            message: "Session not found with id " + req.params.id
          });
        }
        res.send(session)
      })
      .catch(error => {
        res.status(500).send({
          message: error.message || "Something wrong updating session with id " + req.params.id
        });
      });
  }
  else {
    Session.findByIdAndRemove(req.params.id)
      .then(session => {
        if (!session) {
          return res.status(404).send({
            message: "Session not found with id " + req.params.id
          });
        }
        res.send({ message: "Session deleted successfully!" });
      })
      .catch(error => {
        return res.status(500).send({
          message: "Could not delete product with id " + req.params.id
        });
      });
  }
};

module.exports = {
  listSessions,
  readSession,
  createSession,
  deleteSession,
  updateSession
}
