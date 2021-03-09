function strLen(str) {
    const pattern = new RegExp("[^\\w]{1,}", "g");
    let words = str.split(pattern);
    let results = [];
    for (let word of words) {
        results.push([word, word.length].join(' '));
    }
    return results
}