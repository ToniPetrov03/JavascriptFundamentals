function solve(arr) {
    const words = {};

    arr.forEach(word => {
        if (words[word]) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    });

    const sortedWords = Object.keys(words).sort((a, b) => words[b] - words[a]);

    sortedWords.forEach(word => console.log(`${word} -> ${words[word]} times`))
}
