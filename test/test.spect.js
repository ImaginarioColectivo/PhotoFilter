const chai = require('chai');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!doctype html><html><body><img src="paisajes.jpg" alt="paisajes" id="filtro"></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

const blurSelect = require('../assets/js/app.js');
describe("Valida filtro blur", () => {
	blurSelect("blur");
	it("Debe cambiar filtro", () => {
		chai.assert.equal("blur", "5px");
	})
})
module.exports();

