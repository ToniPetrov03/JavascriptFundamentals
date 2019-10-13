function solve(dungeonsRooms) {
    const commands = dungeonsRooms[0].split('|');

    let health = 100;
    let coins = 0;
    let isDead = false;

    for (let i = 0; i < commands.length; i++) {
        const commandArr = commands[i].split(' ');
        const type = commandArr[0];
        const value = Number(commandArr[1]);

        if (type === "potion") {
            let heal = value;

            if (health + heal <= 100) {
                health += heal;
            } else {
                heal = 100 - health;
                health = 100;
            }

            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (type === "chest") {
            coins += value;

            console.log(`You found ${value} coins.`);
        } else {
            if (health - value > 0) {
                health -= value;

                console.log(`You slayed ${type}.`);
            } else {
                isDead = true;

                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);

                break;
            }
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
