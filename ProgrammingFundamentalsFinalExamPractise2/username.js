function solve(arr) {
    arr.pop();

    let username = arr.shift();

    arr.forEach(command => {
        command = command.split(' ');

        switch (command[0]) {
            case 'Case':
                const type = command[1];

                if (type === 'lower') {
                    username = username.toLowerCase();
                } else {
                    username = username.toUpperCase();
                }

                console.log(username);
                break;
            case 'Reverse':
                const startIndex = +command[1];
                const endIndex = +command[2];

                if (startIndex >= 0 && endIndex < username.length) {
                    const substring = username.substring(startIndex, endIndex + 1);

                    console.log([...substring].reverse().join(''));
                }
                break;
            case 'Cut':
                const substring = command[1];

                if (username.includes(substring)) {
                    username = username.replace(substring, '');

                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${substring}.`)
                }
                break;
            case 'Replace':
                const char = command[1];
                const regex = new RegExp(char, 'g');

                username = username.replace(regex, '*');

                console.log(username);
                break;
            case 'Check':
                const symbol = command[1];

                if (username.includes(symbol)){
                    console.log('Valid')
                } else {
                    console.log(`Your username must contain ${symbol}.`)
                }
                break;
        }
    });
}
