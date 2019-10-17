function solve(arr) {
    const x1 = arr[0];
    const y1 = arr[1];
    const x2 = arr[2];
    const y2 = arr[3];

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${distance(x1, y1, 0, 0) % 1 === 0 ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distance(0, 0, x2, y2) % 1 === 0 ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance(x1, y1, x2, y2) % 1 === 0 ? 'valid' : 'invalid'}`);
}
