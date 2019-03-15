Cinema = require('../models/cinema');
const db = require('../utils/DataBaseUtils');



function cinema_list_get(req, res) {
  db.listCinemas()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.json({
        errorMessage: err
      });
    });
}


function cinema_find_byid(req, res) {
  db.findByCinemaid(req.params.id)
    .then(data => {
      res.end(data);
    })
    .catch(err => {
      res.json({
        errorMessage: err
      });
    });
}


module.exports = {
  cinema_list_get,
  cinema_find_byid
}






/* exports.index = function (req, res) {
  Cinema.get(function (err, cinemas) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Cinemas retrieved successfully",
      data: cinemas
    });
  });
};


exports.new = function (req, res) {
  var cinema = new Cinema();
  cinema.id = req.body.id;
  cinema.name = req.body.name ? req.body.name : cinema.name;
  cinema.halls = req.body.halls;

  cinema.save(function (error) {
    if (error) return res.json(error);

    res.json({
      message: 'New cinema created!',
      data: cinema
    });
  });
};

exports.view = function (req, res) {
  Cinema.findById(req.params.id, function (err, cinema) {
    if (err)
      res.send(err);
    res.json({
      message: 'Cinema details loading..',
      data: cinema
    });
  });
}; */