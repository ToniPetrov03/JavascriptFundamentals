function solve(arr) {
    const account = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        const instruction = arr[i].split(' ');
        const command = instruction[0];
        const game = instruction[1];

        switch (command) {
            case 'Install':
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case 'Uninstall':
                if (account.includes(game)) {
                    account.splice(account.indexOf(game), 1);
                }
                break;
            case 'Update':
                if (account.includes(game)) {
                    account.splice(account.indexOf(game), 1);
                    account.push(game);
                }
                break;
            case 'Expansion':
                const expansion = game.split('-');

                if (account.includes(expansion[0])) {
                    account.splice(account.indexOf(expansion[0]) + 1, 0, expansion[0] + ':' + expansion[1]);
                }
                break;
        }
    }

    console.log(account.join(' '));
}
