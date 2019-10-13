function solve(array) {
    const sumOfArr = array.reduce((a, b) => a + b);
    let leftSum = 0;
    let result = 'no';

    for (let i = 0; i < array.length; i++) {
        const sumOfArrWithoutCurrent = sumOfArr - array[i];

        if (sumOfArrWithoutCurrent - leftSum === leftSum) {
            result = i;
            break;
        }

        leftSum += array[i];
    }

    console.log(result);
}
