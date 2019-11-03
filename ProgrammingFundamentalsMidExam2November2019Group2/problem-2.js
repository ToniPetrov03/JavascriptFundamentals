function solve(arr) {
    const names = arr.shift().split(', ');

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command.shift();

        switch (comm) {
            case 'Blacklist':
                const name = command.shift();

                if (names.indexOf(name) === -1) {
                    console.log(`${name} was not found.`)
                } else {
                    console.log(`${name} was blacklisted.`);
                    names[names.indexOf(name)] = 'Blacklisted';
                }
                break;
            case 'Error':
                const index = command.shift();

                if (names[index] !== 'Blacklisted' && names[index] !== 'Lost') {
                    console.log(`${names[index]} was lost due to an error.`);
                    names[index] = 'Lost';
                }
                break;
            case 'Change':
                const ind = command.shift();
                const newName = command.shift();

                if (ind >= 0 && ind < names.length) {
                    console.log(`${names[ind]} changed his username to ${newName}.`);
                    names[ind] = newName;
                }
                break;
        }
    });

    const blacklistedNamesCount = names.filter(name => name === 'Blacklisted').length;
    const lostNamesCount = names.filter(name => name === 'Lost').length;

    console.log(`Blacklisted names: ${blacklistedNamesCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(names.join(' '));
}
