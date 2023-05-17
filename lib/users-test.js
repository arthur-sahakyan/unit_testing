const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

var mongoose = require('mongoose');

var users = require('./users');
var User = require('./models/user');

var sandbox = sinon.createSandbox();


describe('users', () => {
    let findStub;
    let sampleArgs;
    let sampleUser;

    beforeEach(() => {
        sampleUser = {
            id: 123,
            name: 'foo',
            email: 'foo@gmail.com'
        }
        findStub = sandbox.stub(mongoose.Model, 'findById').yields(null, sampleUser);
    })

    afterEach(() => {
        sandbox.restore();

    })

    context('get', () => {
        it('should check for an id ', (done) => {
            users.get(null, (err, result) => {
                expect(err).to.exist;
                expect(err.message).to.equal('Invalid user id');
                done();
            })
        })
        it ('should call findById and return result', (done) => {

            users.get(123, (err, result) => {
                expect(err).to.not.exist;
                expect(result).to.be.a('object');
                expect(result).to.have.property('name').to.equal('foo');
                done()
            })
        })
    })
})