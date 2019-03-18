const mongoose = require('mongoose'),
  Session = mongoose.model('Session');


function listSessions(req, res) {
  Session.find({}, function (err, session) {
    if (err) {
      res.send(err);
    }
    res.json(session);

  });
};

function readSession(req, res) {
  Session.find({ movieId: req.params.id }, function (err, session) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(session);
  });
};

function createSession(req, res) {
  const new_session = new Session(req.body);
  new_session.save(function (err, session) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(session);
  });
};

function updateSession(req, res) {
  Session.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, session) {
    if (err) {
      res.send(err);
    }
    res.json(session);
  });
};

function deleteSession(req, res) {
  Session.remove({
    _id: req.params.id
  }, function (err, session) {
    console.log(req.params.id);
    if (err) {
      res.send(err);
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
