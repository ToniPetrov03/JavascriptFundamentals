function solve(terms) {
    const dictionary = {};

    terms.forEach(term => {
        const parsedTerm = JSON.parse(term);
        const word = Object.keys(parsedTerm)[0];

        dictionary[word] = {
            name: word,
            definition: parsedTerm[word]
        };
    });

    Object.values(dictionary).sort((a, b) => a.name.localeCompare(b.name)).forEach(term => {
        console.log(`Term: ${term.name} => Definition: ${term.definition}`);
    });
}
