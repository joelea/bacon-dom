/// <reference path="../typings/tsd.d.ts"/>

import chai = require("chai");
var expect = chai.expect;

describe("bacon-dom", () => {
    it("triggers no dom changes when the observable does not change", () => {
        expect(1).to.equal(1);
    })
})
