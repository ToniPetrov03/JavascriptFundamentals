function solve(arrOfArr) {
    let equalNeighborPairs = 0;

    arrOfArr.forEach(arr => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                equalNeighborPairs++;
            }
        }
    });

    for (let i = 0; i < arrOfArr[0].length; i++) {
        for (let j = 0; j < arrOfArr.length - 1; j++) {
            if (arrOfArr[j][i] === arrOfArr[j + 1][i]){
                equalNeighborPairs++;
            }
        }
    }

    console.log(equalNeighborPairs);
}
