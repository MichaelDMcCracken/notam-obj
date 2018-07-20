const mocha = require('mocha')
const describe = mocha.describe
const chai = require('chai')
const expect = chai.expect
const notamObj = require('../index.js')

describe('#notamObj()',function () {
  it('is a function',function () {
    expect(notamObj).to.be.a('function')
  })
})
