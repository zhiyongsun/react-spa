
var {getType} = require('../common/utils/getType');
// import {getType} from '../common/utils/getType';

var assert = require('assert')

describe('Array', function () {
  describe('#indexOf()', function () {
    it('未找到值时应当返回-1', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})


describe('getType', function () {
  it('getType 应该返回 true', function () {
    assert.equal(true, getType('a', 'String'))
  })
});
