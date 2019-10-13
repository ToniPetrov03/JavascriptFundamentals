function solve(arr) {
    function initialField(sizeOfTheField, indexesOfAllLadybugs) {
        const field = new Array(sizeOfTheField).fill(0);

        indexesOfAllLadybugs.forEach((indexOfLadybug) => {
            if (field[indexOfLadybug] === 0) {
                field[indexOfLadybug] = 1;
            }
        });

        return field;
    }

    const sizeOfTheField = arr.shift();
    const indexesOfAllLadybugs = arr.shift().split(' ');
    const field = initialField(sizeOfTheField, indexesOfAllLadybugs);

    arr.forEach((value) => {
        value = value.split(' ');

        const index = +value[0];
        const steps = +value[2];

        if (field[index] === 1) {
            field[index] = 0;

            switch (value[1]) {
                case "right":
                    for (let i = index + steps; i < field.length; i += steps) {
                        if (field[i] === 0) {
                            field[i] = 1;
                            break;
                        }
                    }
                    break;
                case "left":
                    for (let i = index - steps; i >= 0; i -= steps) {
                        if (field[i] === 0) {
                            field[i] = 1;
                            break;
                        }
                    }
                    break;
            }
        }
    });

    console.log(field.join(' '));
}
