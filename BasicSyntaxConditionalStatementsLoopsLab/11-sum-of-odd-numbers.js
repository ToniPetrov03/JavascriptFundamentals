function solve(num) {
    let counter = 0;
    let sum = 0;
    let oddNumber = 1;

    while (num > counter) {
        console.log(oddNumber);
        sum += oddNumber;
        oddNumber += 2;
        counter++;
    }

    console.log(`Sum: ${sum}`);
}
