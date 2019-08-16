function solve() {
    const arrOfNumbers = [...arguments];
    let largestNumber = arrOfNumbers.shift();

    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (largestNumber < arrOfNumbers[i]) {
            largestNumber = arrOfNumbers[i]
        }
    }

    console.log(largestNumber);
}
