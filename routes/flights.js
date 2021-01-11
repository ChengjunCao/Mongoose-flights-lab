var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controller/flightsCtrl');

/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlight);
router.get('/:id', flightsCtrl.detail);


router.post('/', flightsCtrl.createFlight);
router.post('/:id/destinations', flightsCtrl.createDestination);

module.exports = router;
