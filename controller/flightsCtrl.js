let Flight = require('../models/flights');
let Ticket = require('../models/tickets');

function index(req,res) {
    Flight.find({}, function(err, results) {
        res.render('flights-index', {results})
    })
}

function newFlight(req,res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, result) {
        res.render('newTicket', {result});
    })
}

function createFlight(req,res) {
    Flight.create({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: req.body.flightNo,
        departs: req.body.departs
    }, function(err, results){
        if (err) return res.render('new');
        res.redirect('/flights')
    })
}

function createTicket(req,res) {
    Ticket.create({
        seat: req.body.seat,
        price: req.body.price,
        flight: req.params.id
    })
}

function addTicket(req,res) {
    Flight.findById(req.params.id, function(err, result) {
        result.tickets.push(req.body);
        result.save(function(err) {
            res.redirect(`/flights/${result._id}`);
        });
    });
}


function detail(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        })
    })
}

function createDestination(req,res) {
    Flight.findById(req.params.id, function(err, result) {
        result.destinations.push(req.body);
        result.save(function(err) {
            res.redirect(`/flights/${result._id}`);
        });
    });
}

module.exports = {
    index,
    newFlight,
    newTicket,
    createFlight,
    createTicket,
    addTicket,
    detail,
    createDestination
}