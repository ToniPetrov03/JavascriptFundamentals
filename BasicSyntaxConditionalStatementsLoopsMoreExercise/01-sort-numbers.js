function solve() {
    const arrOfNumbers = [...arguments];
    arrOfNumbers.sort((a, b) => b - a);

    console.log(arrOfNumbers.join("\n"));
}
