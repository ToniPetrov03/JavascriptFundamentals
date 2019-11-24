function solve(text, word) {
    const censorSymbol = '*'.repeat(word.length);

    console.log(censor(word, text, censorSymbol));

    function censor(word, text, censorSymbol) {
        const newText = text.replace(word, censorSymbol);

        return newText.includes(word) ? censor(word, newText, censorSymbol) : newText;
    }
}
