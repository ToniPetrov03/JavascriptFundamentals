function solve(firstChar, secondChar) {
    const ascii = char => char.charCodeAt(0);
    const numOfFirstChar = ascii(firstChar);
    const numOfSecondChar = ascii(secondChar);

    function getCharsBetween(startChar, endChar) {
        let result = [];

        for (let i = startChar + 1; i < endChar; i++) {
            result.push(String.fromCharCode(i));
        }

        return result.join(' ');
    }

    if (numOfFirstChar < numOfSecondChar) {
        console.log(getCharsBetween(numOfFirstChar, numOfSecondChar));
    } else {
        console.log(getCharsBetween(numOfSecondChar, numOfFirstChar));
    }
}
