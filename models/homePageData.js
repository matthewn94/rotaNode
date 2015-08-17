var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var homePageDataSchema = new Schema({
    sectionOne:     {type: String},
    sectionTwo:     {type: String},
    sectionThree:   {type: String},
    sectionFour:    {type: String}
});
module.exports= mongoose.model('homePageData', homePageDataSchema);