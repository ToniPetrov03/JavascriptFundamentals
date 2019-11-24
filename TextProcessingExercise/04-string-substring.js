function solve(searchedWord, text) {
    const searchedWordLowerCase = searchedWord.toLowerCase();
    const words = text.split(' ');

    let isMatched = false;

    for (const word of words) {
        if (word.toLowerCase() === searchedWordLowerCase) {
            isMatched = true;
            break;
        }
    }

    if (isMatched) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}
