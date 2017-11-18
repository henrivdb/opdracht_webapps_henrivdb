var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/*
let mongoose= require('mongoose');
let Journey= mongoose.model('Journey');

router.get('/API/journeys', function(req, res, next){
  Journey.find(function(err, recipes){
    if(err){return next(err);}
    res.json(recipes);
  });
});*/

