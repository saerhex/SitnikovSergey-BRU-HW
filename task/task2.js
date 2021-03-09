function wordPattern(str) {
    str = str.toLowerCase()
    let letters = Array.from(new Set(str));
    let results = [];
    for (let letter of str) {
        results.push(letters.indexOf(letter))
    }
    return results.join('.')
}