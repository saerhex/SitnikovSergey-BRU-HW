const assert = require("chai").assert;
const func = require("../task3").stringParse;

describe('App', function() {
    it('Should pass aaaabbcdefffffffg.', function() {
        assert.equal(func("aaaabbcdefffffffg"), "aa[aa]bbcdeff[fffff]g")
    })
    it('Should pass boopdedoop.', function() {
        assert.equal(func("boopdedoop"), "boopdedoop")
    })
    it('Should pass helloookat.', function() {
        assert.equal(func("helloookat"), "helloo[o]kat")
    })
});