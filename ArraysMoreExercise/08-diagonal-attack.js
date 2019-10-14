function solve(arr) {
    const directions = {
        right: 'right',
        left: 'left'
    };

    function diagonalSum(matrix, direction) {
        const sign = direction === directions.right ? 1 : -1;
        let counter = direction === directions.right ? 0 : matrix[0].split(' ').length - 1;
        let sum = 0;

        matrix.forEach(row => {
            const numbers = row.split(' ');

            sum += +numbers[counter];

            counter += sign;
        });

        return sum;
    }

    const rightDiagonalSum = diagonalSum(arr, directions.right);
    const leftDiagonalSum = diagonalSum(arr, directions.left);

    let rightCounter = 0;
    let leftCounter = arr[0].split(' ').length - 1;

    if (rightDiagonalSum === leftDiagonalSum) {
        arr.forEach(row => {
            const numbers = row.split(' ');

            for (let i = 0; i < numbers.length; i++) {
                if (i !== rightCounter && i !== leftCounter) {
                    numbers[i] = rightDiagonalSum;
                }
            }

            rightCounter++;
            leftCounter--;

            console.log(numbers.join(' '))
        })
    } else {
        arr.forEach(row => console.log(row))
    }
}
