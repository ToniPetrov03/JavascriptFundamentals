function solve(n) {
    for (let i = 0; i < n; i++) {
        const firstLetter = String.fromCharCode(97 + i);

        for (let j = 0; j < n; j++) {
            const secondLetter = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {
                const thirdLetter = String.fromCharCode(97 + k);

                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}
