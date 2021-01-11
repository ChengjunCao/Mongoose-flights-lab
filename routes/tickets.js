var express = require('express');
var router = express.Router();
let ticketsCtrl = require('../controller/ticketsCtrl');

router.get('/flights/:id/tickets/new', ticketsCtrl.newTicket);
router.post('/flights/:id/tickets', ticketsCtrl.createTicket);

module.exports = router;
