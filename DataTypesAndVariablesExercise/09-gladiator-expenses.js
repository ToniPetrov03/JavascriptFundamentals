function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenShield = 0;
    let totalSum = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            totalSum += helmetPrice;
        }

        if (i % 3 === 0) {
            totalSum += swordPrice;
        }

        if (i % 6 === 0) {
            totalSum += shieldPrice;
            brokenShield++;
        }

        if (brokenShield === 2) {
            totalSum += armorPrice;
            brokenShield = 0;
        }
    }

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}
