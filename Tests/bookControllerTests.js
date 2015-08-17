var should  = require('should'),
    sinon = require('sinon');

describe('Rota Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty name', function () {
            var Rota = function(rota){this.save=function(){}};

            var req = {
                body: {
                    empNum: 'E004'
                }
            }
            var res = {
                status: sinon.spy(),
                    send: sinon.spy()
            }

            var rotaControlller = require('../controllers/rotaController')(Rota);
            rotaControlller.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad status' + res.status.args[0][0]);
            res.send.calledWith('Name is required').should.equal(true);
        })
    })
})