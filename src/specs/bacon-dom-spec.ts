/// <reference path="../typings/tsd.d.ts"/>

import chai = require("chai");
import mockBrowser = require("mock-browser");
import Bacon = require("baconjs");
import attach = require("../main/bacon-dom");

var expect = chai.expect;

var document = mockBrowser.mocks.MockBrowser.createDocument();

describe("bacon-dom", () => {
    it("triggers no dom changes when the observable does not change", () => {
        var emptyDomStream = new Bacon.Bus();
        attach(emptyDomStream).to(document.body);
        expect(document.body.children.length).to.equal(0);
    })
})
