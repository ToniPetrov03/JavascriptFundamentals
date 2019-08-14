function solve(number) {
    for (let i = 1; i <= number ; i++) {
        const sum = sumOfDigits(i);

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

    function sumOfDigits(num) {
        let sum = 0;

        while (num !== 0) {
            sum += num % 10;
            num = Math.trunc(num / 10);
        }

        return sum;
    }
}
