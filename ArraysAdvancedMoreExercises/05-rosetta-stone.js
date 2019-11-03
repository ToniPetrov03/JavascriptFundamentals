function solve(arr) {
    const lengthOfTemplate = +arr.shift();
    const template = [];
    const matrix = [];

    for (let i = 0; i < lengthOfTemplate; i++) {
        template.push(arr.shift().split(' ').map(Number));
    }

    arr.forEach(row => matrix.push(row.split(' ').map(Number)));

    let row = 0;
    let col = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] += template[row][col];

            if (col + 1 === template[row].length) {
                col = 0;
            } else {
                col++;
            }
        }

        if (row + 1 === template.length) {
            row = 0;
        } else {
            row++;
        }

        col = 0;
    }

    console.log(matrixToText(matrix).join(''));

    function matrixToText(matrix) {
        const text = [];

        matrix.forEach(row => {
            row.forEach(num => {
                if (num % 27 === 0) {
                    text.push(' ')
                } else {
                    text.push(String.fromCharCode(num % 27 + 64))
                }
            })
        });

        return text;
    }
}
