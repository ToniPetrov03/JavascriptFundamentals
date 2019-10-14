function solve(product, quantity) {
    const priceCoffee = 1.5;
    const priceWater = 1;
    const priceCoke = 1.4;
    const priceSnacks = 2;

    let sum = 0;

    switch (product) {
        case 'coffee': sum = priceCoffee; break;
        case 'water': sum = priceWater; break;
        case 'coke': sum = priceCoke; break;
        case 'snacks': sum = priceSnacks; break;
    }

    sum *= quantity;

    return sum.toFixed(2);
}
