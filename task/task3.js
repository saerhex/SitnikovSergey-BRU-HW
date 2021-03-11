module.exports = {
    stringParse
};

function stringParse(str) {
    return typeof str === "string" ? str.replace(/((\w)\2)(\2+)/g, (match, p1, p2, p3) => { return `${p1}[${p3}]` }) : "Povezlo-povezlo";
}

console.log(stringParse("aaaabbcdefffffffg"))