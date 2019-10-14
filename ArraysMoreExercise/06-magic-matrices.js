function solve(arr) {
    let isMagicMatrices = true;
    const sum = arr[0].reduce((a, b) => a + b);

    for (let row = 1; row < arr.length; row++) {
        let sumOfRow = arr[row].reduce((a, b) => a + b);

        if (sum !== sumOfRow) {
            isMagicMatrices = false;
            break;
        }
    }

    for (let col = 0; col < arr[0].length; col++) {
        let sumOfCol = 0;

        for (let row = 0; row < arr.length; row++) {
            sumOfCol += arr[row][col];
        }

        if (sum !== sumOfCol) {
            isMagicMatrices = false;
            break;
        }
    }

    console.log(isMagicMatrices);
}
