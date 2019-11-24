function solve(arr) {
    const dataHeroes = [];

    arr.forEach(dataHero => {
        dataHero = dataHero.split(' / ');

        const sortedItems = dataHero[2].split(', ').sort().join(', ');

        dataHeroes.push({
            name: dataHero[0],
            level: +dataHero[1],
            items: sortedItems
        });
    });

    dataHeroes.sort((a, b) => a.level - b.level);

    dataHeroes.forEach(dataHero => {
        console.log('Hero: ' + dataHero.name);
        console.log('level => ' + dataHero.level);
        console.log('items => ' + dataHero.items);
    });
}
