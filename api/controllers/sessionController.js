const mongoose = require('mongoose'),
  Session = mongoose.model('Session');


function listSessions(req, res) {
  Session.find({}, function (error, session) {
    if (error) {
      res.send(error);
    }
    res.json(session);
  });
};

function readSession(req, res) {
  Session.find({ movieId: req.params.id }, function (error, session) {
    if (error) {
      res.send(error);
    }
    res.json(session);
  });
};

function createSession(req, res) {
  const newSession = new Session(req.body);
  newSession.save(function (error, session) {
    if (error) {
      res.send(error);
    }
    res.json(session);
  });
};

function updateSession(req, res) {
  Session.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (error, session) {
    if (error) {
      res.send(error);
    }
    res.json(session);
  });
};

function deleteSession(req, res) {
  Session.remove({ id: req.params.id }, function (error, session) {
    if (error) {
      res.send(error);
    }
    res.json({ message: 'Session successfully deleted' });
  });
};

module.exports = {
  listSessions,
  readSession,
  createSession,
  deleteSession,
  updateSession
}
