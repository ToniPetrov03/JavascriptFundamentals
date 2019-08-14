function solve(unfinishedWord, letter, desiredWord) {
    const finishedWord = unfinishedWord.replace('_', letter);
    const matchedOrNotMatched = finishedWord === desiredWord ? "Matched" : "Not Matched";

    console.log(matchedOrNotMatched);
}
