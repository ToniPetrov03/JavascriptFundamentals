function solve(arr) {
    arr.forEach(row => {
        row = row.split(' | ');

        const town = {
            town: row[0],
            latitude: Number(row[1]).toFixed(2),
            longitude: Number(row[2]).toFixed(2)
        };

        console.log(town)
    })
}
