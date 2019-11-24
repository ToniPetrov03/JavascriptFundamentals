function solve(demonsName) {
    const sortedDemonsName = demonsName[0].split(/[, ]+/).sort((a, b) => a.localeCompare(b));

    sortedDemonsName.forEach(demonName => {
        let demonHealth = 0;
        let demonDamage = 0;

        const spacialChars = demonName.match(/[^0-9+*/.-]/g);

        if (spacialChars) {
            spacialChars.forEach(letter => demonHealth += letter.charCodeAt(0));
        }

        const numbers = demonName.match(/[-+]?\d+\.?\d*/g);

        if (numbers) {
            numbers.forEach(number => demonDamage += Number(number));
        }

        const operators = demonName.match(/[*/]/g);

        if (operators) {
            operators.forEach(operator => {
                if (operator === '*') {
                    demonDamage *= 2;
                } else {
                    demonDamage /= 2;
                }
            });
        }

        console.log(`${demonName} - ${demonHealth} health, ${demonDamage.toFixed(2)} damage`);
    });
}
