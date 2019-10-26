function solve(arr) {
    let inventory = new Set([...arr.shift().split(' ')]);

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command[0];
        const equipment = command[1];

        switch (comm) {
            case 'Buy':
                inventory.add(equipment);
                break;
            case 'Trash':
                inventory.delete(equipment);
                break;
            case 'Repair':
                inventory.delete(equipment);
                inventory.add(equipment);
                break;
            case 'Upgrade':
                const eq = equipment.split('-');
                const nameOfEq = eq[0];
                const upgrade = eq[1];

                if (inventory.has(nameOfEq)) {
                    const arrayOfInventory = [...inventory];

                    const index = arrayOfInventory.indexOf(nameOfEq) + 1;
                    inventory = new Set([
                        ...arrayOfInventory.slice(0, index),
                        `${nameOfEq}:${upgrade}`,
                        ...arrayOfInventory.slice(index)
                    ]);
                }

                break;
        }
    });

    console.log([...inventory].join(' '));
}
