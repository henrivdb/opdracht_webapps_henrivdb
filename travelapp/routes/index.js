var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

require('../models/Journey');

let mongoose = require('mongoose');
let Journey = mongoose.model('Journey');


router.get('/API/journeys/', function(req, res, next) {
  Journey.find(function(err, journeys) {
    if (err) { return next(err); }
    res.json(journeys);
  });
});

router.post('/API/journeys/', function (req, res, next) {
  let journey = new Journey({name: req.body.name, destination: req.body.destination, 
    startDate:req.body.startdate,endDate:req.body.endDate, country:req.body.country});
    //let journey = new Journey({req.body});
  journey.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

router.get('/API/journey/:journey', function(req, res) {
  if (err) return next(err);  
  res.json(req.journey);
});

router.param('journey', function(req, res, next, id) {
  let query = Journey.findById(id);
  query.exec(function (err, journey){
    if (err) { return next(err); }
    if (!journey) { return next(new Error('not found ' + id)); }
    req.journey = journey;
    return next();
  });
});

router.delete('/API/journey/:journey', function(req, res, next) {
    req.journey.remove(function(err) {
      if (err) { return next(err); }   
      res.json(req.journey);
     });
})
