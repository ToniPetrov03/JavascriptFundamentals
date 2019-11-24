function solve(string) {
    return [...string].filter((char, index) => char !== string[index + 1]).join('');
}
