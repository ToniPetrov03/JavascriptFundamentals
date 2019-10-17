function solve(arr) {
    const sorted = arr.sort();

    sorted.forEach((text, i) => console.log(i + 1 + '.' + text));
}
