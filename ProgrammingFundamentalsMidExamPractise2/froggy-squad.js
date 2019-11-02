function solve(arr) {
    const namesOfFrogs = arr.shift().split(' ');

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command.shift();

        switch (comm) {
            case 'Join':
                const name = command.shift();

                if (!namesOfFrogs.includes(name)) {
                    namesOfFrogs.push(name);
                }
                break;
            case 'Jump':
                const n = command.shift();
                const index = command.shift();

                if (index >= 0 && index < namesOfFrogs.length) {
                    namesOfFrogs.splice(index, 0, n);
                }
                break;
            case 'Dive':
                const ind = command.shift();

                if (ind >= 0 && ind < namesOfFrogs.length) {
                    namesOfFrogs.splice(ind, 1);
                }
                break;
            case 'First':
                const count = command[0] > namesOfFrogs.length ? namesOfFrogs.length : +command.shift();

                console.log(namesOfFrogs.slice(0, count).join(' '));
                break;
            case 'Last':
                const i = namesOfFrogs.length - (command[0] > namesOfFrogs.length ? namesOfFrogs.length : +command.shift());

                console.log(namesOfFrogs.slice(i).join(' '));
                break;
            case 'Print':
                const normalOrReversed = command.shift();

                switch (normalOrReversed) {
                    case 'Normal': console.log('Frogs: ' + namesOfFrogs.join(' ')); break;
                    case 'Reversed': console.log('Frogs: ' + namesOfFrogs.reverse().join(' ')); break;
                }
                break;
        }
    });
}
