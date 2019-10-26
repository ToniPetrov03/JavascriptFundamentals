function solve(arr) {
    const peopleInWagons = arr.shift().split(' ').map(Number);
    const capacity = arr.shift();

    arr.forEach(command => {
        if (command.includes('Add')) {
            const newWagonWithPeople = +command.split(' ')[1];

            peopleInWagons.push(newWagonWithPeople);
        } else {
            const people = +command;
            const indexOfAvailableValue = peopleInWagons.findIndex(peopleInWagon => peopleInWagon + people <= capacity);

            peopleInWagons[indexOfAvailableValue] += people;
        }
    });

    console.log(peopleInWagons.join(' '));
}
