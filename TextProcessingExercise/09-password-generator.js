function solve(arr) {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
    const newStr = [...arr[0] + arr[1]];
    const word = arr[2].toLocaleUpperCase();

    let counter = 0;

    const password = newStr.map(symbol => {
        if (VOWELS.has(symbol)) {
            if (!word[counter]) {
                counter = 0;
            }

            symbol = word[counter];
            counter++;
        }

        return symbol;
    }).reverse().join('');

    console.log('Your generated password is ' + password);
}
