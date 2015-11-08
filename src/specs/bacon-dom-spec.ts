/// <reference path="../typings/tsd.d.ts"/>

import chai = require("chai");
import Bacon = require("baconjs");
import attach = require("../main/bacon-dom");
import h = require("virtual-dom/h")

var expect = chai.expect;

var testDomElement = document.createElement("div");
testDomElement.className = "test";
document.body.appendChild(testDomElement)

beforeEach(() => testDomElement.innerHTML = '')

describe("bacon-dom", () => {
    it("contains the initial dom state", (done) => {
        var initialDom = Bacon.once(h('.hello-world', []));
        attach(initialDom).to(testDomElement);

        initialDom.onEnd(() => {
            expect(testDomElement.innerHTML).to.equal('<div class="hello-world"></div>')
            done();
        })
    })

    it("responds-to-changes-in-the-dom", (done) => {
        var dom = new Bacon.Bus();
        attach(dom).to(testDomElement);

        dom.push(h('.step-1', []));
        dom.push(h('.step-2', []));
        dom.end();

        setTimeout(() => {
            expect(testDomElement.innerHTML).to.equal('<div class="step-2"></div>')
            done()
        }, 100);
    })
});
