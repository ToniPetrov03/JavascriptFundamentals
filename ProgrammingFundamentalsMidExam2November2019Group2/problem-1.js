function solve(arr) {
    const wantedExperience = +arr.shift();
    const countOfBattles = +arr.shift();

    let isManaged = false;
    let experience = 0;

    for (let i = 1; i <= countOfBattles; i++) {
        let currentExperience = +arr[i - 1];

        if (i % 3 === 0) {
            currentExperience += currentExperience * 0.15;
        }

        if (i % 5 === 0) {
            currentExperience -= currentExperience * 0.1;
        }

        experience += currentExperience;

        if (experience >= wantedExperience) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            isManaged = true;
            break;
        }
    }

    if (!isManaged) {
        console.log(`Player was not able to collect the needed experience, ${(wantedExperience - experience).toFixed(2)} more needed.`);
    }
}
