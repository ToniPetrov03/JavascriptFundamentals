function solve(array) {
    const topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let isBiggerThanOthers = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isBiggerThanOthers = false;
                break;
            }
        }

        if (isBiggerThanOthers) {
            topIntegers.push(array[i]);
        }
    }

    console.log(topIntegers.join(' '));
}
