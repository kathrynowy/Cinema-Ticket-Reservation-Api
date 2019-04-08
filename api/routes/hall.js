const express = require('express');
const router = express.Router();
const passport = require('passport');

const hallController = require('../controllers/hallController');


router.route('/halls').get(hallController.listHalls).post(hallController.createHall);


router.get('/halls/:id', passport.authenticate('jwt', { session: false }), hallController.readHall);
router.route('/halls/:id').put(hallController.updateHall).delete(hallController.deleteHall);

router.get('/cinema/:id/halls', hallController.findHalls);

module.exports = router;
