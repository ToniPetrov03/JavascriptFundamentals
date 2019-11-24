function solve(arr) {
    const attackedPlanets = [];
    const destroyedPlanets = [];

    for (let i = 1; i <= arr[0]; i++) {
        const message = arr[i];

        const specialLetters = message.match(/[star]/gi);

        let decryptedMessage = message;

        if (specialLetters) {
            decryptedMessage = [...message].map(symbol => String.fromCharCode(symbol.charCodeAt(0) - specialLetters.length)).join('');
        }

        const validMessage = decryptedMessage.match(/@([A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!([AD])![^@\-!:>]*->\d+/);

        if (validMessage) {
            const planetName = validMessage[1];
            const attackOrDestruction = validMessage[2];

            if (attackOrDestruction === 'A') {
                attackedPlanets.push(planetName);
            } else {
                destroyedPlanets.push(planetName);
            }
        }
    }

    const sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    const sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);

    sortedAttackedPlanets.forEach(attackedPlanet => console.log('-> ' + attackedPlanet));

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);

    sortedDestroyedPlanets.forEach(destroyedPlanet => console.log('-> ' + destroyedPlanet));
}
