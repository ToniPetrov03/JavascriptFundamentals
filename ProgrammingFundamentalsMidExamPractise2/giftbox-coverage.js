function solve(arr) {
    const sizeOfSide = +arr.shift();
    const numSheets = +arr.shift();
    const areaOfSingleSheet = +arr.shift();
    const area = 6 * sizeOfSide * sizeOfSide;

    let totalCoveredArea = 0;

    for (let i = 1; i <= numSheets; i++) {
        const coveredArea = i % 3 === 0 ? areaOfSingleSheet * 0.25 : areaOfSingleSheet;

        totalCoveredArea += coveredArea;
    }

    const percentage = totalCoveredArea / area * 100;

    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`)
}
