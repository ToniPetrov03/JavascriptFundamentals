function solve(arr) {
    const offers = arr.reduce((obj, offer) => {
        const [country, town, cost] = offer.split(' > ');

        if (country in obj) {
            if (!(town in obj[country]) || obj[country][town] > cost) {
                obj[country][town] = cost;
            }
        } else {
            obj[country] = {[town]: cost};
        }

        return obj;
    }, {});

    return Object
        .keys(offers)
        .sort((a, b) => a.localeCompare(b))
        .map(offer =>`${offer} -> ` + Object
            .entries(offers[offer])
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' '))
        .join('\n');
}
