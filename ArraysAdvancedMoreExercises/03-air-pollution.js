function solve(arr, commands) {
    const breeze = -15;
    const gale = -20;
    const matrix = [];

    arr.forEach(nums => matrix.push(nums.split(' ').map(Number)));

    commands.forEach(command => {
        command = command.split(' ');
        const force = command[0];
        const indexOrValue = +command[1];

        switch (force) {
            case 'breeze':
                matrix[indexOrValue].forEach((num, i) => {
                    if (num + breeze >= 0) {
                        matrix[indexOrValue][i] = num + breeze;
                    }
                });
                break;
            case 'gale':
                matrix.forEach(row => {
                    if (row[indexOrValue] + gale >= 0) {
                        row[indexOrValue] += gale;
                    }
                });
                break;
            case 'smog':
                matrix.forEach(row => row.forEach((num, i) => row[i] = num + indexOrValue));
                break;
        }
    });

    const coordinatesOfPollutedAreas = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                coordinatesOfPollutedAreas.push(` [${i}-${j}]`);
            }
        }
    }

    if (coordinatesOfPollutedAreas.length) {
        console.log('Polluted areas:' + coordinatesOfPollutedAreas);
    } else {
        console.log('No polluted areas');
    }
}
