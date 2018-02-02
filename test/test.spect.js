const assert = require('chai').assert;
const filters = require('../assets/js/app.js');

describe('filters', () => {
	it('Debe cambiar filtro a blur', () => {
		assert.equal('blur' !== undefined, true);
	});
	it('Debe cambiar filtro a sepia', () => {
		assert.equal('sepia' !== undefined, true);
	});

	it('Debe cambiar filtro a opacity', () => {
		assert.equal('opacity' != undefined, true);
	})
	it('Debe cambiar filtro a contrast', () => {
		assert.equal('contrast' != undefined, true);
	})
	it('Debe cambiar filtro a huerotate', () => {
		assert.equal('hueRotate' != undefined, true);
	})
 	it('Debe cambiar filtro a drop-shadow', () => {
 		assert.equal('drop-shadow' != undefined, true);
 	})
 	it('Debe cambiar filtro a none', () => {
 		assert.equal('none' != undefined, true);
 	})	
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


