module.exports = {
    stringParse,
    strLen,
    wordPattern,
};


function strLen(str) {
    const pattern = new RegExp("[^\\w]{1,}", "g");
    let words = str.split(pattern);
    let results = [];
    for (let word of words) {
        results.push([word, word.length].join(' '));
    }
    return results
}

function wordPattern(str) {
    str = str.toLowerCase()
    let letters = Array.from(new Set(str));
    let results = [];
    for (let letter of str) {
        results.push(letters.indexOf(letter))
    }
    return results.join('.')
}

function stringParse(str) {
    return typeof str === "string" ? str.replace(/((\w)\2)(\2+)/g, (match, p1, p2, p3) => { return `${p1}[${p3}]` }) : "Povezlo-povezlo";
}

console.log(strLen("i so fucking love js"))