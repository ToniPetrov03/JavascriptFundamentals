function solve(arr1, arr2) {
    const differentIndex = findDifferentIndex(arr1, arr2);

    if (differentIndex === -1) {
        console.log(`Arrays are identical. Sum: ${arr1.reduce((acc, curr) => acc + parseInt(curr, 10), 0)}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }

    function findDifferentIndex(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return  i;
            }
        }

        return -1;
    }
}
