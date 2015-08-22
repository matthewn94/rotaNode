var express = require('express'),
    nodemailer = require('nodemailer');


var routes  = function(homePageData) {
    var homePageRouter = express.Router();
    var homePageController = require('../controllers/homePageController')(homePageData)

    homePageRouter.route('/')
        .get(homePageController.get);

    homePageRouter.route('/contactconfirmation')
        .post(homePageController.getContactConfirmation);

    return homePageRouter;
};
module.exports = routes;