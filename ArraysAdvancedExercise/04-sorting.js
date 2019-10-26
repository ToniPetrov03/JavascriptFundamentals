function solve(array) {
    const specialSorting = arr => {
        const result = [];

        for (let i = 0; i < arr.length / 2; i++) {
            result.push(arr[i]);
            result.push(arr[arr.length - 1 - i]);
        }

        if (arr.length % 2 === 1) {
            result.pop();
        }

        return result;
    };

    array.sort((a, b) => b - a);

    console.log(specialSorting(array).join(' '));
}
