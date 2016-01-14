var url = 'http://localhost:3000',
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    fakes = require('../fakesServices/fakeCategories'),
    CategoriesController = require('../../server/controllers/CategoriesController')( fakes.categories);

chai.use(chaiHttp);
chai.use(sinonChai);

describe('CategoriesController', function () {
    describe('get', function () {
        it('should render first page of categories!', function () {
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

            CategoriesController.get(req, res, next);

            expect(res.render.calledWith('categories/categories')).to.be.true;
        });
    })
});
