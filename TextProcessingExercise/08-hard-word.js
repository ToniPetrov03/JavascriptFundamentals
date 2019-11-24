function solve(arr) {
    const textWithTemplates = arr[0].split(' ');
    const templatesOfWords = {};

    arr[1].forEach(word => templatesOfWords['_'.repeat(word.length)] = word);

    const newText = textWithTemplates.map(word => {
        if (templatesOfWords[word]) {
            word = templatesOfWords[word];
        }

        return word;
    });

    console.log(newText.join(' '));
}
