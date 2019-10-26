function solve(arr, bombNumber) {
    const specialNum = bombNumber[0];
    const power = bombNumber[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === specialNum) {
            for (let j = i - power; j <= i + power; j++) {
                arr[j] = false;
            }
        }
    }

    const sum = arr.filter(num => num !== false).reduce((a, b) => a + b, 0);

    console.log(sum);
}
