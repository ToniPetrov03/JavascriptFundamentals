function solve(arr) {
    const participants = {};

    arr.shift().split(', ').forEach(participant => participants[participant] = 0);
    arr.pop();

    arr.forEach(command => {
        const name = command.match(/[A-Z]*[a-z]*/g).join('');
        const distance = command.match(/\d/g).reduce((a, b) => Number(a) + Number(b));

        participants[name] += distance;
    });

    const sortedParticipants = Object.keys(participants).sort((a, b) => participants[b] - participants[a]);

    console.log(
        `1st place: ${sortedParticipants[0]}` + '\n' +
        `2nd place: ${sortedParticipants[1]}` + '\n' +
        `3rd place: ${sortedParticipants[2]}`
    );
}
