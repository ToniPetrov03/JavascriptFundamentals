function solve(arr) {
    arr.pop();

    let text = arr.shift();

    arr.forEach(command => {
        command = command.split(' ');

        switch (command[0]) {
            case 'Translate':
                const char = command[1];
                const replacement = command[2];
                const regex = new RegExp(char, 'g');

                text = text.replace(regex, replacement);

                console.log(text);
                break;
            case 'Includes':
                const string = command[1];

                console.log(text.includes(string) ? 'True' : 'False');
                break;
            case 'Start':
                const str = command[1];

                console.log(text.startsWith(str) ? 'True' : 'False');
                break;
            case 'Lowercase':
                text = text.toLowerCase();

                console.log(text);
                break;
            case 'FindIndex':
                const symbol = command[1];

                console.log(text.lastIndexOf(symbol));
                break;
            case 'Remove':
                const startIndex = +command[1];
                const endIndex = +command[2] + startIndex;

                text = text.substring(0, startIndex) + text.substring(endIndex, text.length);

                console.log(text);
                break;
        }
    });
}
