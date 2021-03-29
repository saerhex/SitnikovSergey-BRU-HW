const assert = require("chai").assert;
const funcs = require('../task');

describe('strLen testing...', function() {
    it('Should pass “hello worldd”.', function() {
        assert.equal(funcs.strLen("hello worldd"), ["hello 5", "worldd 6"])
    })
    it('Should pass "i so fucking love js".', function() {
        assert.equal(funcs.strLen("i so fucking love js"), ['i 1', 'so 2', 'fucking 7', 'love 4', 'js 2'])
    })
});
describe('wordPattern testing...', function() {
    it('Should pass "hello".', function() {
        assert.equal(funcs.wordPattern("hello"), "0.1.2.2.3")
    })
    it('Should pass "heLlo".', function() {
        assert.equal(funcs.wordPattern("heLlo"), "0.1.2.2.3")
    })
    it('Should pass "Hippopotomonstrosesquippedaliophobia".', function() {
        assert.equal(funcs.wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13")
    })
});
describe('stringParse testing...', function() {
    it('Should pass aaaabbcdefffffffg.', function() {
        assert.equal(funcs.stringParse("aaaabbcdefffffffg"), "aa[aa]bbcdeff[fffff]g")
    })
    it('Should pass boopdedoop.', function() {
        assert.equal(funcs.stringParse("boopdedoop"), "boopdedoop")
    })
    it('Should pass helloookat.', function() {
        assert.equal(funcs.stringParse("helloookat"), "helloo[o]kat")
    })
});