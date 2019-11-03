function solve(numbersAndCoordinates) {
    const coordinates = numbersAndCoordinates.pop().split(' ');
    const matrix = [];

    numbersAndCoordinates.forEach(nums => matrix.push(nums.split(' ').map(Number)));

    let sumOfDamage = 0;
    let numberOfKilled = 0;

    coordinates.forEach(coordinate => {
        coordinate = coordinate.split(',');
        const row = +coordinate[0];
        const col = +coordinate[1];
        const damage = matrix[row][col];
        const canMakeDamageUp = row >= 1;
        const canMakeDamageLeft = col >= 1;
        const canMakeDamageDown = row + 1 < matrix.length;
        const canMakeDamageRight = col + 1 < matrix[row].length;

        if (damage > 0) {
            sumOfDamage += damage;
            numberOfKilled++;

            if (canMakeDamageLeft) {
                matrix[row][col - 1] -= damage;
            }

            if (canMakeDamageRight) {
                matrix[row][col + 1] -= damage;
            }

            if (canMakeDamageUp) {
                matrix[row - 1][col] -= damage;
            }

            if (canMakeDamageDown) {
                matrix[row + 1][col] -= damage;
            }

            if (canMakeDamageUp && canMakeDamageLeft) {
                matrix[row - 1][col - 1] -= damage;
            }

            if (canMakeDamageDown && canMakeDamageRight) {
                matrix[row + 1][col + 1] -= damage;
            }

            if (canMakeDamageUp && canMakeDamageRight) {
                matrix[row - 1][col + 1] -= damage;
            }

            if (canMakeDamageDown && canMakeDamageLeft) {
                matrix[row + 1][col - 1] -= damage;
            }

            matrix[row][col] = 0;
        }
    });

    const bunniesLeft = [].concat(...matrix).filter(bunny => bunny > 0);
    sumOfDamage += bunniesLeft.reduce((a, b) => a + b, 0);
    numberOfKilled += bunniesLeft.length;

    console.log(sumOfDamage);
    console.log(numberOfKilled)
}
