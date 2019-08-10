function solve(n) {
    for (let i = 1; i <= n; i++) {
        let numbersOnRow = "";

        for (let j = 1; j <= i; j++) {
            numbersOnRow += i + " ";
        }

        console.log(numbersOnRow);
    }
}
