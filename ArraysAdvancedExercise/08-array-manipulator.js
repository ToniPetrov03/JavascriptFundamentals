function solve(array, commands) {
    function sumPairs(arr) {
        const pairsSum = [];

        for (let i = 0; i < arr.length - 1; i += 2) {
            pairsSum.push(arr[i] + arr[i + 1]);
        }

        if (arr.length % 2 === 1) {
            pairsSum.push(arr[arr.length - 1]);
        }

        return pairsSum;
    }

    function addMany(arr, indexAndElements) {
        const index = +indexAndElements.shift();
        const elements = indexAndElements.map(Number);

        return [...arr.slice(0, index), ...elements, ...arr.slice(index)];
    }

    function add(arr, index, element) {
        return [...arr.slice(0, index), element, ...arr.slice(index)];
    }

    function shift(arr, index) {
        return [...arr.slice(+index), ...arr.slice(0, +index)];
    }

    function remove(arr, index) {
        return arr.filter((_, i) => i !== +index);
    }

    commands.forEach(command => {
        command = command.split(' ');

        switch (command.shift()) {
            case 'add': array = add(array, command[0], command[1]); break;
            case 'addMany': array = addMany(array, command); break;
            case 'remove': array = remove(array, command[0]); break;
            case 'shift': array = shift(array, command[0]); break;
            case 'sumPairs': array = sumPairs(array); break;
            case 'contains': console.log(array.indexOf(+command[0])); break;
        }
    });

    console.log(`[ ${array.join(', ')} ]`);
}
