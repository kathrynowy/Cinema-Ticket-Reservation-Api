const mongoose = require('mongoose');
Session = mongoose.model('Session');

function listSessions(req, res) {
  Session.find()
    .then(session => res.send(session))
    .catch(error => {
      res.status(500).send({
        message: error.message || "Something wrong while retrieving sessions."
      });
    });
};

function readSession(req, res) {
  Session.find({ movieId: req.params.id })
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
};

module.exports = {
  listSessions,
  readSession,
  createSession,
  deleteSession,
  updateSession
}
