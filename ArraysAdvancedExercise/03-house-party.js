function solve(arr) {
    const list = new Set();

    arr.forEach(command => {
        command = command.split(' ');
        const name = command[0];
        const isGoing = command[2] !== 'not';

        if (isGoing) {
            if (list.has(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.add(name);
            }
        } else {
            if (!list.has(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                list.delete(name);
            }
        }
    });

    console.log([...list].join('\n'));
}
