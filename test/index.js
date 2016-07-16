import assert from 'assert';
import slrngenJs from '../lib';

describe('slrngen-js', function () {
  it('Create', function () {
    var str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
    str = slrngenJs.create();
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
  });
  it('Verify with dashes', function () {
    var str = '123-456-781';
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
  });
  it('Verify without dashes', function () {
    var str = '123456781';
    assert(slrngenJs.verify(str), str + ': SLRN is invalid!');
  });
  it('Format with dashes', function () {
    var str = '123456781';
    assert.equal('123-456-781', slrngenJs.fmt(str), 'SLRN format is wrong!');
  });
  it('Checking checksum', function () {
    var str = slrngenJs.checksum('20400883');
    assert.equal('204008830', '20400883' + str, 'SLRN checksum is invalid!');
  });
  it('Format with SLRN text', function () {
    var str = slrngenJs.fmtw('204008830');
    assert.equal('SLRN 204-008-830', str, 'SLRN format is correct!');
  });
  it('Prefix and SLRN', function () {
    var str = slrngenJs.prefix();
    assert.equal('2672204008830', str + '204008830', 'SLRN format is correct!');
  });
  it('Deformat a SLRN', function () {
    assert.equal('204008830', slrngenJs.defmt('204-008-830'), 'SLRN deformat is correct!');
  });
});
