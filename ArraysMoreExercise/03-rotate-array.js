function solve(arr) {
    const amountOfRotation = arr.pop();

    for (let i = 0; i < amountOfRotation; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }

    console.log(arr.join(' '));
}
