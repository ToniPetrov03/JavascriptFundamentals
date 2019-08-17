function solve(array) {
    function reducer(accumulator, currentValue) {
        const parsedCurrentValue = parseInt(currentValue, 10);

        if (parsedCurrentValue % 2 === 0) {
            return accumulator + parsedCurrentValue;
        }

        return accumulator;
    }

    console.log(array.reduce(reducer, 0));
}
