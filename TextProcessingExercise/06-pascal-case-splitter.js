function solve(string) {
    const result = [...string].map((char, index) => {
        if (/^[A-Z]/.test(string[index + 1])) {
            char += ', ';
        }

        return char;
    });

    console.log(result.join(''));
}
