function solve(arr) {
    const regex = new RegExp(/%([A-Z][a-z]+)%[^\d]*<(\w+)>[^\d]*\|(\d+)\|[^\d]*(\d+\.?\d+)\$/, 'g');

    let income = 0;

    while (true) {
        const validPurchase = regex.exec(arr);

        if (validPurchase === null) {
            break;
        }

        const customerName = validPurchase[1];
        const product = validPurchase[2];
        const quantity = +validPurchase[3];
        const price = +validPurchase[4];

        const totalPrice = quantity * price;

        income += totalPrice;

        console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}
