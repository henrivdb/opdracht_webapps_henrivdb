var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

require('../models/Journey');
require('../models/User');

let mongoose = require('mongoose');
let Journey = mongoose.model('Journey');

let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.JOURNEY_BACKEND_SECRET, userProperty: 'payload' });

router.get('/API/journeys/', auth, function (req, res, next) {
  Journey.find(function (err, journeys) {
    if (err) { return next(err); }
    res.json(journeys);
  });
});

router.post('/API/journeys/', auth, function (req, res, next) {
  let journey = new Journey({
    name: req.body.name, destination: req.body.destination,
    startDate: req.body.startDate, endDate: req.body.endDate, country: req.body.country,
    user: req.body.user, resume: req.body.resume
  });
  journey.save(function (err, rec) {
    if (err) { return next(err); }
    res.json(rec);
  });
});

router.param('journey', function (req, res, next, id) {
  let query = Journey.findById(id);
  query.exec(function (err, journey) {
    if (err) { return next(err); }
    if (!journey) { return next(new Error('not found ' + id)); }
    req.journey = journey;
    return next();
  });
});

router.get('/API/journey/:journey', function (req, res) {
  res.json(req.journey)
});

router.delete('/API/journey/:journey', function (req, res, next) {
  req.journey.remove(function (err) {
    if (err) { return next(err); }
    res.json(req.journey);
  });
});

router.put('/API/journey/:jourid', function (req, res) {
  var collection = Journey;

  if (!req.body) { return res.send(400); } // 6

  collection.findById(req.params.jourid, function (err, data) {
    if (err) { return res.send(500, err); } // 1, 2

    if (!data) { return res.send(404); } // 3

    var update = {
      name: req.body.name, destination: req.body.destination,
      country: req.body.country,
      user: req.body.user, resume: req.body.resume
    };

    collection.findOneAndUpdate({ _id: req.params.jourid }, update, function (err) { // 5
      if (err) {
        return res.send(500, err);
      }
      //res.json(data);
    });
  });
});


