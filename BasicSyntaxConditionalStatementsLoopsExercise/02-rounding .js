function solve(number, n) {
    return +parseFloat(number).toFixed(n > 15 ? 15 : n);
}
