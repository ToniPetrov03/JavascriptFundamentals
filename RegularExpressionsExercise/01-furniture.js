function solve(purchases) {
    const regex = new RegExp(/>>(\w+)<<(\d+\.?\d+)!(\d+)/, 'gi');

    const boughtFurniture = [];
    let totalPrice = 0;

    while (true) {
        const validPurchase = regex.exec(purchases);

        if (validPurchase === null) {
            break;
        }

        const name = validPurchase[1];
        const price = +validPurchase[2];
        const quantity = +validPurchase[3];

        boughtFurniture.push(name);
        totalPrice += price * quantity;
    }

    console.log('Bought furniture:');

    if (boughtFurniture.length) {
        console.log(boughtFurniture.join('\n'));
    }

    console.log('Total money spend: ' + totalPrice.toFixed(2));
}
