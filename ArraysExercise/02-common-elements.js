function solve(firstArray, secondArray) {
    const intersection = firstArray.filter(x => secondArray.includes(x));
    const result = intersection.join("\n");

    console.log(result);
}
