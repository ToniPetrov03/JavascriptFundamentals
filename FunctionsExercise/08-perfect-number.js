function solve(number) {
    let aliquotSum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            aliquotSum += i;
        }
    }

    if (aliquotSum === number && aliquotSum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
