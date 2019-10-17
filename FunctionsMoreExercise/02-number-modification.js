function solve(num) {
    let digits = Array.from(String(num), Number);
    let sum = digits.reduce((a, b) => a + b);

    while (sum / digits.length < 5) {
        sum += 9;
        digits.push(9);
    }

    console.log(digits.join(''));
}
