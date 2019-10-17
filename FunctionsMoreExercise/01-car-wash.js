function solve(arr) {
    let percent = 0;

    arr.forEach(command => {
        switch (command) {
            case 'soap': percent += 10; break;
            case 'water': percent *= 1.2; break;
            case 'vacuum cleaner': percent *= 1.25; break;
            case 'mud': percent *= 0.9; break;
        }
    });

    console.log(`The car is ${percent.toFixed(2)}% clean.`);
}
