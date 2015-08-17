var express = require('express'),
    mongoose = require('mongoose'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    path = require('path');

var db;

if(process.env.ENV =='Test'){
    db = mongoose.connect('mongodb://localhost/rotaSync_test');
    } else{
    db = mongoose.connect('mongodb://localhost/rotaSync');
}
var Rota = require('./models/rotaModel');
var homePageData = require('./models/homePageData');

var app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(__dirname + '/favicon.ico'))
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', __dirname+'/public/views');
app.set('view engine', 'jade');

rotaRouter = require('./routes/rotaRoutes')(Rota);
homePageRouter = require('./routes/homeRoutes')(homePageData);

app.use('/rotas', rotaRouter)
app.use('/', homePageRouter);

//app.get('/', function (req, res){
//    res.render('index');
//});

app.listen(port, function(){
    console.log('Gulp is running on port: ' + port);
});

module.exports = app;