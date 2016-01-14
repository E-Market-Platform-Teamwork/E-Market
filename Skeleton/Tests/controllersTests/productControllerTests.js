var url = 'http://localhost:3000',
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    fakes = require('../fakesServices/fakeServices'),
    productsController = require('../../server/controllers/productsController')( fakes.products);

chai.use(chaiHttp);
chai.use(sinonChai);

describe('productsController', function () {
    describe('get', function () {
            it('should render first page of products!', function () {
            var res = {
                redirect: function () {
                },
                render: function () {
                }
            };

            var req = {};
            var next = function () {
            };

            sinon.spy(res, 'render');
            sinon.spy(res, 'redirect');

            productsController.getAll(req, res, next);

            expect(res.render.calledWith('products/products')).to.be.true;
        });
    })
});