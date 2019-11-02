function solve(arr) {
    const days = +arr.shift();
    const plunderForDay = +arr.shift();
    const expectedPlunder = +arr.shift();

    let plunder = 0;

    for (let i = 1; i <= days; i++) {
        plunder += plunderForDay;

        if (i % 3 === 0) {
            plunder += plunderForDay / 2;
        }

        if (i % 5 === 0) {
            plunder *= 0.7;
        }
    }

    if (plunder >= expectedPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`)
    } else {
        const percentage =  plunder / expectedPlunder * 100;

        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
