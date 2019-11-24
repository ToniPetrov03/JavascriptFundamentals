function solve(words, textWithTemplates) {
    const templatesOfWords = {};

    words.split(', ').forEach(word => templatesOfWords['*'.repeat(word.length)] = word);

    const newText = textWithTemplates.split(' ').map(word => {
        if (templatesOfWords[word]) {
            word = templatesOfWords[word];
        }

        return word;
    });

    console.log(newText.join(' '));
}
