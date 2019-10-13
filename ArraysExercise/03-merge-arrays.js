function solve(firstArray, secondArray) {
    const thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            thirdArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            thirdArray.push(firstArray[i] + secondArray[i]);
        }
    }

    const result = thirdArray.join(" - ");

    console.log(result);
}
