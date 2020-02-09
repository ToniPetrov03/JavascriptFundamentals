function solve(str) {
    const itemsAndQuantity = str.split(/ (?=\d+)/);

    const specialItems = {
        shards: [250, 'Shadowmourne'],
        fragments: [250, 'Valanyr'],
        motes: [250, 'Dragonwrath']
    };

    const junk = {};
    const possession = {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    itemsAndQuantity.some(itemAndQuantity => {
        const [quantityStr, itemStr] = itemAndQuantity.split(' ');

        const item = itemStr.toLowerCase();
        const quantity = parseInt(quantityStr);

        if (specialItems[item]) {
            const [neededMaterial, specialItem] = specialItems[item];

            possession[item] += quantity;

            if (possession[item] >= neededMaterial) {
                possession[item] -= neededMaterial;

                console.log(`${specialItem} obtained!`);
                return true;
            }
        } else {
            junk[item] ? junk[item] += quantity : junk[item] = quantity;
        }
    });

    const sortedPossession = Object.keys(possession).sort((a, b) => possession[b] - possession[a] || a.localeCompare(b));
    const sortedJunk = Object.keys(junk).sort((a, b) => a.localeCompare(b));

    console.log(sortedPossession.map(item => `${item}: ${possession[item]}`).join('\n'));
    console.log(sortedJunk.map(trash => `${trash}: ${junk[trash]}`).join('\n'));
}
