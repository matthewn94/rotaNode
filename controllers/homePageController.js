var homePageController = function (homePageData) {
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
    return{
        get: get
    }
}
module.exports = homePageController;