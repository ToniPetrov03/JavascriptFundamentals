function solve(n) {
    const matrix = new Array(n).fill(n).map(() => new Array(n).fill(n));

    matrix.forEach(row => console.log(row.join(' ')));
}
