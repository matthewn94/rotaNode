
var homePageController = function (homePageData) {

    var transporter = require('./emailTransporter')

    var get = function(req, res){
        homePageData.find(function(err, homePageData){
            if(err) res.status(500).send(err);

            else{
                //console.log('homePageData: '+homePageData);
                res.render('index',
                    {homePageData: homePageData});
            }
        });
    }
    var getContactConfirmation = function (req, res) {
        var mailOptions = {
            from:  req.body.email,
            to: 'matthewcdneill@gmail.com',
            subject: 'RotaSync Contact',
            text: req.body.message + '\n\nUser name:' + req.body.name + '\n\nUser email: ' + req.body.email
        };

        console.log('debug: HPC got here' + req.body.message + req.body.email);

        transporter.sendMail(mailOptions, function (error, info) {
            if(error)
                console.log(error);
            else{
                console.log('Message sent: ' + info.response);
                res.render('contactconfirmation');
            }
        });
    }
    return{
        get: get,
        getContactConfirmation: getContactConfirmation
    }
}
module.exports = homePageController;