Cinema = require('../models/cinema');
const db = require('../utils/DataBaseUtils');


function cinema_list_get(req, res) {
  db.listCinemas()
    .then(data => {
      console.log(data);
      res.send(data)
    })
    .catch(err => {
      res.json({
        errorMessage: err
      });
    });
}


function cinema_find_by_id(req, res) {
  db.findByCinemaName(req.params.id)
    .then(data => {
      console.log(req.params.id);
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
  cinema_find_by_id
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