function solve(arr) {
    arr.pop();

    let users = {};
    const capacity = +arr[0];

    arr.forEach(command => {
        command = command.split('=');

        switch (command[0]) {
            case 'Add':
                const username = command[1];
                const sent = +command[2];
                const received = +command[3];

                if (!users[username]) {
                    users[username] = [sent, received];
                }
                break;
            case 'Message':
                const sender = command[1];
                const receiver = command[2];

                if (users[sender] && users[receiver]) {
                    users[sender][0]++;
                    users[receiver][1]++;

                    if (users[sender][0] + users[sender][1] >= capacity) {
                        delete users[sender];
                        console.log(`${sender} reached the capacity!`);
                    }

                    if (users[receiver][0] + users[receiver][1] >= capacity) {
                        delete users[receiver];
                        console.log(`${receiver} reached the capacity!`);
                    }
                }
                break;
            case 'Empty':
                const user = command[1];
                if (user === 'All') {
                    users = {};
                } else if (users[user]) {
                    delete users[user];
                }
                break;
        }
    });

    const sortedUsers = Object.keys(users).sort((a, b) => users[b][1] - users[a][1] || a.localeCompare(b));

    console.log(`Users count: ${sortedUsers.length}`);
    sortedUsers.forEach(user => console.log(`${user} - ${users[user][0] + users[user][1]}`));
}