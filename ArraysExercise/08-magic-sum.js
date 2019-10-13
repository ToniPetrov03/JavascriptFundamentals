function solve(arr, sum) {
    const pairs = [];
    const availableNumbers = {};

    arr.forEach(num => availableNumbers[num] ? availableNumbers[num]++ : availableNumbers[num] = 1);

    arr.forEach(firstPart => {
        const secondPart = sum - firstPart;
        const sameNumberAvailable = availableNumbers[firstPart] > 1 || firstPart !== secondPart;

        if (availableNumbers[firstPart] > 0 && availableNumbers[secondPart] > 0 && sameNumberAvailable) {
            pairs.push([firstPart, secondPart]);
            availableNumbers[firstPart]--;
            availableNumbers[secondPart]--;
        }
    });

    pairs.forEach(pair => console.log(pair.join(' ')));
}


