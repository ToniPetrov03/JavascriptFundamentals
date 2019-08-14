function solve(number) {
    const isAmazingNumber = sumOfDigits(number).toString().includes('9') ? " Amazing? True" : " Amazing? False";

    console.log(number + isAmazingNumber);

    function sumOfDigits(num) {
        let sum = 0;

        while (num !== 0) {
            sum += num % 10;
            num = Math.trunc(num / 10);
        }

        return sum;
    }
}
