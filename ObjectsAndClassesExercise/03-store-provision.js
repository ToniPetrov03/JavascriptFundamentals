function solve() {
    const depots = [...arguments];
    const stock = {};

    depots.forEach(depot => {
        for (let i = 0; i < depot.length; i += 2) {
            if (stock[depot[i]]) {
                stock[depot[i]] += +depot[i + 1];
            } else {
                stock[depot[i]] = +depot[i + 1];
            }
        }
    });

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`)
    }
}
