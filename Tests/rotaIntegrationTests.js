var should = require('should'),
    request = require('supertest'),
    app = ('../app.js'),
    mongoose = require('mongoose'),
    Rota = mongoose.model('Rota'),
    agent = request.agent(app);

describe('Rota Crud Test', function(){
    it('Should allow a rota to be posted', function (done) {
        var rotaPost = {
            empNum: 'E004',
            empName: 'Edwin',
            week: 'W001',
            shifts: [8, 0, 8, 8, 8, 0, 8]};

        agent.post('/rotas')
            .send(rotaPost)
            .expect(200)
            .end(function (err, results) {
                results.body.empName.should.equal('Edwin');
                results.body.should.have.property('_id');
                done();
            })
    })
    afterEach(function (done) {
        Rota.remove().exec();
        done();
    })
})