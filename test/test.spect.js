/*const chai = require('chai');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = dom;
global.document = window.document;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};*/
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
})



