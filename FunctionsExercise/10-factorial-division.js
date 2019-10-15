function solve(num1, num2) {
    function factorial(num) {
        if (num === 1) {
            return 1;
        }

        return num * factorial(num - 1);
    }

    const num1Factorial = factorial(num1);
    const num2Factorial = factorial(num2);

    console.log((num1Factorial / num2Factorial).toFixed(2));
}
