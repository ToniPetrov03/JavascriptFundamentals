function solve(number) {
    const digits = Array.from(String(number), Number);

    let oddSum = 0;
    let evenSum = 0;

    digits.forEach(digit => {
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
