function solve(arr) {
    arr.forEach(number => {
        const reversedNumber = parseInt(number.toString().split('').reverse().join(''));

        console.log(reversedNumber === number);
    });
}
