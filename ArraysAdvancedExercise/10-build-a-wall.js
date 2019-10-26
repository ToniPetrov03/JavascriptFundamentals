function solve(arr) {
    const maxHeightOfWall = 30;
    const cubicYardsEveryDay = 195;
    const oneCubicYardPrize = 1900;

    const totalCubicYards = [];

    while (arr.length) {
        let cubicYards = 0;

        arr = arr.map(height => {
            cubicYards += cubicYardsEveryDay;
            return ++height;
        });

        arr = arr.filter(height => height < maxHeightOfWall);
        totalCubicYards.push(cubicYards);
    }

    const sumOfCubicYards = totalCubicYards.reduce((a, b) => a + b);

    console.log(totalCubicYards.join(', '));
    console.log(`${sumOfCubicYards * oneCubicYardPrize} pesos`);
}
