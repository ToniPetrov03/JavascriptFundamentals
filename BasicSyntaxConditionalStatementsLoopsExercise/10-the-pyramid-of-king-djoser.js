function solve(size, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = increment;
    let steps = 0;

    for (let i = size; i > 2; i -= 2) {
        steps++;

        if (steps % 5 !== 0) {
            marble += (i * 4 - 4) * increment;
        } else {
            lapisLazuli += (i * i - (i - 2) * (i - 2)) * increment;
        }

        stone += (i - 2) * (i - 2) * increment;
    }

    if (size % 2 === 0) {
        gold *= 4;
    }

    steps++;

    stone = Math.ceil(stone);
    marble = Math.ceil(marble);
    lapisLazuli = Math.ceil(lapisLazuli);
    gold = Math.ceil(gold);

    let height = Math.floor(steps * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}
