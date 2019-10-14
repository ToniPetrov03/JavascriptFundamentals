function solve(arr) {
    const numbers = [];

    arr.forEach((command, index) => {
        const number = index + 1;

        switch (command) {
            case 'add':
                numbers.push(number);
                break;
            case 'remove':
                numbers.pop();
                break;
        }
    });

    if (numbers.length) {
        console.log(numbers.join(' '));
    } else {
        console.log("Empty");
    }
}
