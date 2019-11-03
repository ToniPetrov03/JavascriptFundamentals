function solve(arr) {
    const vehicles = arr.shift().split(', ');
    arr.shift();

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command.shift();

        switch (comm) {
            case 'Add,':
                const tankName = command.join(' ');

                if (vehicles.includes(tankName)) {
                    console.log('Tank is already bought');
                } else {
                    console.log('Tank successfully bought');
                    vehicles.push(tankName);
                }
                break;
            case 'Remove,':
                const name = command.join(' ');

                if (vehicles.includes(name)) {
                    console.log('Tank successfully sold');
                    vehicles.splice(vehicles.indexOf(name), 1);
                } else {
                    console.log('Tank not found');
                }
                break;
            case 'Remove':
                const index = +command[1];

                if (index >= 0 && index < vehicles.length) {
                    console.log('Tank successfully sold');
                    vehicles.splice(index, 1);
                } else {
                    console.log('Index out of range');
                }
                break;
            case 'Insert,':
                const ind = +command.shift().replace(',', '');
                const tank = command.join(' ');

                if (ind >= 0 && ind < vehicles.length) {
                    if (vehicles.includes(tank)) {
                        console.log('Tank is already bought');
                    } else {
                        console.log('Tank successfully bought');
                        vehicles.splice(ind, 0, tank);
                    }
                } else {
                    console.log('Index out of range');
                }
                break;
        }
    });

    console.log(vehicles.join(', '))
}
