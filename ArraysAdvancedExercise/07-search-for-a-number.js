function solve(arr, command) {
    const lengthOfArr = command[0];
    const lengthOfDelete = command[1];
    const searchedNumber = command[2];

    arr.length = lengthOfArr;
    arr = arr.slice(lengthOfDelete);
    const numOfSearchedNumber = arr.filter(num => num === searchedNumber).length;

    console.log(`Number ${searchedNumber} occurs ${numOfSearchedNumber} times.`)
}
