import assert from 'assert';
import slrngenJs from '../lib';

describe('slrngen-js', function () {
  it('Create SLRN', function () {
    var str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.checksum('20400883');
    assert.equal('204008830', '20400883' + str, 'SLRN is invalid!');
  });
  it('Verify SLRN with dashes', function () {
    var str = '123-456-781';
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
  });
  it('Verify SLRN without dashes', function () {
    var str = '123456781';
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
  });
  it('Format SLRN with dashes', function () {
    var str = '123456781';
    assert.equal('123-456-781', slrngenJs.fmt(str), 'SLRN is formated incorrectly!');
  });
});
