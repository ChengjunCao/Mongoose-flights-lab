let Flight = require('../models/flights');
let Ticket = require('../models/tickets');


function newTicket(req,res) {
    Flight.findById(req.params.id, function(err, result) {
        res.render('tickets/new', {result})
    })
}

function createTicket(req,res) {
    let id = req.params.id;
    req.body.flight = id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${id}`)
    })
}

module.exports = {
    newTicket,
    createTicket
}