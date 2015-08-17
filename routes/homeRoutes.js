var express = require('express');

var routes  = function(homePageData) {
    var homePageRouter = express.Router();
    var homePageController = require('../controllers/homePageController')(homePageData)

    homePageRouter.route('/')
        .get(homePageController.get);

    return homePageRouter;
};
module.exports = routes;