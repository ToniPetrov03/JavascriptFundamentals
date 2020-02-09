function solve(arr) {
    const guests = {};
    let unlikeMeals = 0;

    arr.forEach(command => {
        command = command.split('-');

        switch (command[0]) {
            case 'Like':
                const guest = command[1];
                const mea1 = command[2];

                if (guests[guest]) {
                    if (!guests[guest].has(mea1)){
                        guests[guest].add(mea1);
                    }
                } else {
                    guests[guest] = new Set([mea1]);
                }
                break;
            case 'Unlike':
                const gue = command[1];
                const meal = command[2];

                if (guests[gue]) {
                    if (guests[gue].has(meal)) {
                        unlikeMeals++;
                        delete guests[gue].delete(meal);

                        console.log(`${gue} doesn't like the ${meal}.`);
                    } else {
                        console.log(`${gue} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${gue} is not at the party.`);
                }
                break;
        }
    });

    const sortedGuests = Object.keys(guests).sort((a, b) => guests[b].size - guests[a].size || a.localeCompare(b));

    sortedGuests.forEach(guest => {
        const meals = [];

        guests[guest].forEach(meal => meals.push(meal));

        console.log(`${guest}: ${meals.join(', ')}`);
    });

    console.log(`Unliked meals: ${unlikeMeals}`);
}
