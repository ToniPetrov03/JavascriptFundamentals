function solve(str) {
    const words = str.split(' ');

    const repetitionsOfWords = words.reduce((map, wordStr) => {
        const word = wordStr.toLowerCase();

        return map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
    }, new Map());

    return [...repetitionsOfWords.keys()].filter(word => repetitionsOfWords.get(word) % 2 === 1).join(' ');
}
