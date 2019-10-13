function solve(arrayOfNumbers) {
    const modifiedArrayOfNumbers = arrayOfNumbers.map((value, index) => {
        if (value % 2 === 0) {
            return value + index;
        } else {
            return value - index;
        }
    });

    const sumOfArrayOfNumbers = arrayOfNumbers.reduce((a, b) => a + b);
    const sumOfModifiedArrayOfNumbers = modifiedArrayOfNumbers.reduce((a, b) => a + b);

    console.log(modifiedArrayOfNumbers);
    console.log(sumOfArrayOfNumbers);
    console.log(sumOfModifiedArrayOfNumbers);
}
