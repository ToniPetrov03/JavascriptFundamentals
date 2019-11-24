function solve(string) {
    const reversedString = [...string].reverse().join('');
    const middle = reversedString.length / 2;
    const firstHalf = reversedString.slice(0, middle);
    const secondHalf = reversedString.slice(middle);

    console.log(secondHalf);
    console.log(firstHalf);
}
