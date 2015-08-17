var express = require('express');

var routes  = function(Rota){
    var rotaRouter = express.Router();
    var rotaController = require('../controllers/rotaController')(Rota)

    rotaRouter.route('/')
        .post(rotaController.post)
        .get(rotaController.get);

    rotaRouter.use('/:RotaId', function(req,res,next){
        Rota.findById(req.params.RotaId, function(err, rota){
            if(err)
                res.status(500).send(err);
            else if(rota){
                req.rota = rota;
                next();
            }
            else{
                res.status(404).send('No rota by that id');
            }

        });
    })
    rotaRouter.route('/:RotaId')
        .get(function(req, res){
            res.json(req.rota);
        })
        .put(function(req, res){
            req.rota.empNum = req.body.empNum;
            req.rota.empName= req.body.empName;
            req.rota.week= req.body.week;
            req.rota.shifts= req.body.shifts;
            req.rota.save(function(err){
                       if(err)
                           res.status(500).send(err);
                       else
                           res.json(req.rota);
                   });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body){
                req.rota[p] = req.body[p];
            }
            req.rota.save(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(req.rota);
            });
        })
        .delete(function (req,res) {
            req.rota.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else
                    res.status(204).send('Removed');
            });
        });
    return rotaRouter;
};
module.exports = routes;