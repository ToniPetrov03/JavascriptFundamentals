function solve(arr) {
    arr.pop();

    const followers = {};

    arr.forEach(command => {
        command = command.split(': ');

        switch (command[0]) {
            case 'New follower':
                const name = command[1];

                if (!followers[name]) {
                    followers[name] = [0, 0];
                }
                break;
            case 'Like':
                const username = command[1];
                const count = +command[2];

                if (followers[username]) {
                    followers[username][0] += count;
                } else {
                    followers[username] = [count, 0];
                }
                break;
            case 'Comment':
                const user = command[1];

                if (followers[user]) {
                    followers[user][1]++;
                } else {
                    followers[user] = [0, 1];
                }
                break;
            case 'Blocked':
                const nameOfUser = command[1];

                if (followers[nameOfUser]) {
                    delete followers[nameOfUser];
                } else {
                    console.log(`${nameOfUser} doesn't exist.`);
                }
                break;
        }
    });

    const sortedUsers = Object.keys(followers).sort((a, b) => followers[b][0] - followers[a][0] || a.localeCompare(b));

    console.log(`${sortedUsers.length} followers`);
    sortedUsers.forEach(user => console.log(`${user}: ${followers[user][0] + followers[user][1]}`));
}
