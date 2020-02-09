function solve(arr) {
    arr.shift();

    const regex = new RegExp(/!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})]$/, 'm');

    arr.forEach(message => {
        message = regex.exec(message);

        if (message) {
            const command = message[1];
            const asciiArr = [...message[2]].map(char => char.charCodeAt(0));

            console.log(`${command}: ${asciiArr.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    });
}
