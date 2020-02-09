function solve(arr) {
    let text = arr.shift();

    arr.forEach(command => {
        command = command.split(' ');

        switch (command[0]) {
            case 'Replace':
                const currentChar = command[1];
                const newChar = command[2];
                const regex = new RegExp(currentChar, 'g');

                text = text.replace(regex, newChar);

                console.log(text);
                break;
            case 'Cut':
                const startIndex = +command[1];
                const endIndex = +command[2];

                if (startIndex >= 0 && endIndex < text.length) {
                    text = text.substring(0, startIndex) + text.substring(endIndex + 1, text.length);

                    console.log(text);
                } else {
                    console.log('Invalid indexes!');
                }
                break;
            case 'Make':
                const type = command[1];

                if (type === 'Upper') {
                    text = text.toUpperCase();
                } else {
                    text = text.toLowerCase();
                }

                console.log(text);
                break;
            case 'Check':
                const string = command[1];

                if (text.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;
            case 'Sum':
                const startInd = +command[1];
                const endInd = +command[2];

                if (startInd >= 0 && endInd < text.length) {
                    const sum = [...text.substring(startInd, endInd + 1)].map(char => char.charCodeAt(0)).reduce((a, b) => a + b);

                    console.log(sum);
                } else {
                    console.log('Invalid indexes!');
                }
                break;
        }
    });
}
