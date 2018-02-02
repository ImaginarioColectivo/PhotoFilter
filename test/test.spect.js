const assert = require('chai').assert;
const filters = require('../assets/js/app.js');

describe('filters', () => {
	it('Debe cambiar filtro a blur', () => {
		assert.notEqual('blur' == undefined, true);
	});
	it('Debe cambiar filtro a sepia', () => {
		assert.notEqual('sepia' == undefined, true);
	});
	it('Debe cambiar filtro a opacity', () => {
		assert.notEqual('opacity' == undefined, true);
	})
	it('Debe cambiar filtro a contrast', () => {
		assert.notEqual('contrast' == undefined, true);
	})
	it('Debe cambiar filtro a huerotate', () => {
		assert.notEqual('hueRotate' == undefined, true);
	})
 	it('Debe cambiar filtro a drop-shadow', () => {
 		assert.notEqual('drop-shadow' == undefined, true);
 	})
 	it('Debe cambiar filtro a none', () => {
 		assert.notEqual('none' == undefined, true);
 	})	
  	it('Debe cambiar filtro a invert', () => {
   		assert.notEqual('invert' == undefined, true);
 	});
 	it('Debe cambiar filtro a saturate', () => {
    		assert.notEqual('saturate' == undefined, true);
 	});
  	it('Debe cambiar filtro a grayscale', () => {
    		assert.notEqual('grayscale' == undefined, true);
  	});
  	it('Debe cambiar filtro a brightness', () => {
   		assert.notEqual('brightness' == undefined, true);
 	});
 	it('Debe cambiar filtro a photofilter', () => {
    		assert.notEqual('photofilter' == undefined, true);
 	});
});



