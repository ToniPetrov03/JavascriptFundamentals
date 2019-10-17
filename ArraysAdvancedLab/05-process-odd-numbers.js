function solve(arr) {
    return arr.filter((_, index) => index % 2).map(num => num * 2).reverse().join(' ');
}
