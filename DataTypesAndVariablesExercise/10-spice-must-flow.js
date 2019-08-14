function solve(startingYield) {
    const spicesForTheMiningCrew = 26;
    let isStartToExtract = false;
    let days = 0;
    let totalAmountOfSpice = 0;

    while (startingYield >= 100) {
        isStartToExtract = true;
        days++;
        totalAmountOfSpice += startingYield - spicesForTheMiningCrew;
        startingYield -= 10;
    }

    if (isStartToExtract) {
        totalAmountOfSpice -= spicesForTheMiningCrew;
    }

    console.log(days);
    console.log(totalAmountOfSpice);
}
