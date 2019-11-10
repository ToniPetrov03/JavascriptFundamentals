function solve(arr) {
    const neighborhoods = {};
    const listOfNeighborhoods = arr.shift().split(', ');

    listOfNeighborhoods.forEach(neighborhood => neighborhoods[neighborhood] = []);

    arr.forEach(neighborhoodAndPerson => {
        neighborhoodAndPerson = neighborhoodAndPerson.split(' - ');

        const neighborhood = neighborhoodAndPerson[0];
        const person = neighborhoodAndPerson[1];

        if (neighborhood in neighborhoods) {
            neighborhoods[neighborhood].push(person);
        }
    });

    const sortedNeighborhoods = Object.keys(neighborhoods).sort((a, b) => neighborhoods[b].length - neighborhoods[a].length);

    sortedNeighborhoods.forEach(neighborhood => {
        console.log(neighborhood + ': ' + neighborhoods[neighborhood].length);

        neighborhoods[neighborhood].forEach(person => {
            console.log('--' + person);
        });
    });
}
