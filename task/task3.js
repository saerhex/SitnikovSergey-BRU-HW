module.exports = {
    stringParse
};

function stringParse(str) {
    if (typeof str != "string") {
        return "Fuck you idiot!";
    }
    let regex = new RegExp("(\\w)\\1{2,}", "g");
    let res = str.replace(regex, (match, p1) => {
        return `${p1.repeat(2)}[${p1.repeat(match.length - 2)}]`;
    })
    return res
}