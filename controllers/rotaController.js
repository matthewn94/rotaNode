var rotaController = function(Rota){

    var post = function(req,res){
        var rota = new Rota(req.body);

        if(!req.body.empName){
            res.status(400);
            res.send('Name is required');
        }else{
            rota.save();
            res.status(201);
            res.send(rota);
        }
    }
    var get  =function(req, res){
        var query = {};
        Rota.find(query, function(err, rotas){
            if(err){
                res.status(500).send(err);
            }
            else{
                var returnRotas =[];
                rotas.forEach(function (element, index, array){
                  var newRota = element.toJSON();
                    newRota.links = {};
                    newRota.links.self = 'http://'+req.headers.host + '/rotas/'+newRota._id;
                    returnRotas.push(newRota);
                });
                res.render('rotas/index',{returnRotas: returnRotas});
            }
        });
    }
    return{
        post: post,
        get: get
    }
}

module.exports = rotaController;