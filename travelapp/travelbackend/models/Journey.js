var mongoose = require('mongoose');

var JourneySchema = new mongoose.Schema({
destination:String
});
mongoose.model('Journey', JourneySchema);