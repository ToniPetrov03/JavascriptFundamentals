function solve(arr) {
    let biggestNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
        } else {
            arr[i] = false;
        }
    }

    console.log(arr.filter(element => element !== false).join(' '));
}
