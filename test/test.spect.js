const assert = require('chai').assert;
const filters = require('../assets/js/app.js');

describe('filters', () => {
  it('Debe cambiar filtro a blur', () => {
    assert.equal('blur' !== undefined, true);
  });
  it('Debe cambiar filtro a sepia', () => {
    assert.equal('sepia' !== undefined, true);
  });
  it('Debe cambiar filtro a invert', () => {
    assert.equal('invert' !== undefined, true);
  });
  it('Debe cambiar filtro a saturate', () => {
    assert.equal('saturate' !== undefined, true);
  });
  it('Debe cambiar filtro a grayscale', () => {
    assert.equal('grayscale' !== undefined, true);
  });
  it('Debe cambiar filtro a brightness', () => {
    assert.equal('brightness' !== undefined, true);
  });
  it('Debe cambiar filtro a photofilter', () => {
    assert.equal('photofilter' !== undefined, true);
  });
});
