function solve([searchingWordsStr, ...words]) {
    const searchingWords = searchingWordsStr.split(' ');

    const repetitionsOfWords = words.reduce((obj, word) => (obj[word] = obj[word] ? obj[word] + 1 : 1, obj), {});

    searchingWords.sort((a, b) => (repetitionsOfWords[b] || 0) - (repetitionsOfWords[a] || 0));

    return searchingWords.map(word => `${word} - ${repetitionsOfWords[word] || 0}`).join('\n');
}
