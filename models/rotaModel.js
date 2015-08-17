var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var rotaModel = new Schema({
    empNum:     {type: String},
    empName:    {type: String},
    week:       {type: String},
    shifts:     {type: Array}
});
module.exports= mongoose.model('Rota', rotaModel);
