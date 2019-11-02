function solve(arr) {
    const loots = arr.shift().split('|');

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command.shift();

        switch (comm) {
            case 'Loot':
                for (let i = 0; i < command.length; i++) {
                    if (!loots.includes(command[i])) {
                        loots.unshift(command[i]);
                    }
                }
                break;
            case 'Drop':
                const index = command.shift();
                const loot = loots[index];

                if (index >= 0 && index <= loots.length) {
                    loots.splice(index, 1);
                    loots.push(loot);
                }
                break;
            case 'Steal':
                const count = +command.shift();

                if (count >= loots.length) {
                    console.log(loots.join(', '));
                    loots.length = 0;
                } else {
                    console.log(loots.splice(loots.length - count).join(', '));
                }
                break;
        }
    });

    let sumOfAllItemsLength = 0;

    loots.forEach(loot => sumOfAllItemsLength += loot.length);

    const averageGain = (sumOfAllItemsLength / loots.length).toFixed(2);

    if (loots.length) {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`)
    } else {
        console.log('Failed treasure hunt.');
    }
}
