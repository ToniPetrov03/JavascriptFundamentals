function solve(arr) {
    let numbers = arr.shift().split(' ').map(Number);

    function add(numbers, num) {
        return numbers.push(num);
    }

    function remove(numbers, num) {
        return numbers.filter(number => number !== num);
    }

    function removeAt(numbers, index) {
        return numbers.splice(index, 1);
    }

    function insert(numbers, index, num) {
        return numbers.splice(index, 0, num);
    }

    arr.forEach(instruction => {
        instruction = instruction.split(' ');

        const command = instruction[0];
        const num = +instruction[1];
        const index = +instruction[2];

        switch (command) {
            case 'Add': add(numbers, num); break;
            case 'Remove': numbers = remove(numbers, num); break;
            case 'RemoveAt': removeAt(numbers, num); break;
            case 'Insert': insert(numbers, index, num); break;
        }
    });

    console.log(numbers.join(' '));
}
