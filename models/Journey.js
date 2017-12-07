var mongoose = require('mongoose');

var JourneySchema = new mongoose.Schema({
  name:String,
  destination:String,
  startDate:Date,
  endDate:Date,
  country:String,
  user:[String],
  resume:[String]
});	

mongoose.model('Journey', JourneySchema);