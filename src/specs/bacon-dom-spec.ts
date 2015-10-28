/// <reference path="../typings/tsd.d.ts"/>

import chai = require("chai");
import Bacon = require("baconjs");
import attach = require("../main/bacon-dom");
import h = require("virtual-dom/h")

var expect = chai.expect;

describe("bacon-dom", () => {
    it("triggers no dom changes when the observable does not change", () => {
        var emptyDomStream = new Bacon.Bus();
        attach(emptyDomStream).to(document.body);
        expect(document.body.children.length).to.equal(0);
    })

    it("contains the initial dom state", () => {
        var initialDom = Bacon.once(h('.hello-world', []));
        attach(initialDom).to(document.body);

        expect(document.body.getElementsByClassName('.hello-world'))
            .to.have.length(1);
    })
})
