function solve(word, text) {
    console.log(removeOccurrences(word, text));

    function removeOccurrences(word, text) {
        const newText = text.replace(word, '');

        return newText.includes(word) ? removeOccurrences(word, newText) : newText;
    }
}
