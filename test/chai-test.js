const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const {foo} = require('../lib/func');


describe('chai test' , () => {
    it('shoud compare two arguments', () => {
        expect(10).to.be.exist;
        expect('a').to.not.be.empty;
    });
    it('shoud spy', () => {
        const spy = sinon.spy(console, 'log');
        foo();
        expect(spy.calledOnce).to.be.true;
    })
})
