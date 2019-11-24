function solve(products) {
    const unsortedCatalogue = {};
    const sortedCatalogue = {};

    products.forEach(product => {

        product = product.split(' : ');
        unsortedCatalogue[product[0]] = +product[1];

    });

    Object.keys(unsortedCatalogue).sort((a, b) => a.localeCompare(b)).forEach(key => sortedCatalogue[key] = unsortedCatalogue[key]);

    let firstLetter = '';

    for (const name in sortedCatalogue) {
        if (name[0] !== firstLetter) {
            firstLetter = name[0];

            console.log(firstLetter);
        }

        console.log(name + ': ' + sortedCatalogue[name]);
    }
}
