import assert from 'assert';
import slrngenJs from '../lib';

describe('slrngen-js', function () {
  it('Create SLRN', function () {
    var str = slrngenJs.create();
    assert(slrngenJs.verify(str), 'New SLRN is valid!');
  });
  it('Verify SLRN with dashes', function () {
    var str = '123-456-781';
    assert(slrngenJs.verify(str), 'SLRN is valid!');
  });
  it('Verify SLRN without dashes', function () {
    var str = '123456781';
    assert(slrngenJs.verify(str), 'SLRN is valid!');
  });
});
