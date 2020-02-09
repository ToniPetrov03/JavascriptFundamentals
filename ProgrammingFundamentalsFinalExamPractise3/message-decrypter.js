function solve(arr) {
    arr.shift();

    const regex = new RegExp(/^(\$|%)([A-Z][a-z]{2,})\1: \[([0-9]+)]\|\[([0-9]+)]\|\[([0-9]+)]\|$/, 'm');

    arr.forEach(message => {
        message = regex.exec(message);

        if (message) {
            console.log(`${message[2]}: ${String.fromCharCode(+message[3]) + String.fromCharCode(+message[4]) + String.fromCharCode(+message[5])}`);
        } else {
            console.log('Valid message not found!');
        }
    })
}
