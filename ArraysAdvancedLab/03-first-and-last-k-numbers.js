function solve(arr) {
    const k = arr.shift();

    console.log(arr.slice(0, k).join(' '));
    console.log(arr.slice(arr.length - k).join(' '));
}
