function solve(minedGoldEachDay) {
    const oneBitcoinPrice = 11949.16;
    const oneGramOfGoldPrice = 67.51;
    let day = 0;
    let totalAmountOfMoney = 0;
    let totalBoughtBitcoins = 0;
    let firstPurchasedBitcoin = "";

    minedGoldEachDay.forEach((minedGold) => {
        day++;

        let currentAmountOfMoney = minedGold * oneGramOfGoldPrice;

        if (day % 3 === 0) {
            currentAmountOfMoney *= 0.7;
        }

        totalAmountOfMoney += currentAmountOfMoney;

        if (totalAmountOfMoney >= oneBitcoinPrice) {
            if (totalBoughtBitcoins === 0) {
                firstPurchasedBitcoin = `Day of the first purchased bitcoin: ${day}`
            }

            let boughtBitcoins = Math.floor(totalAmountOfMoney / oneBitcoinPrice);
            totalBoughtBitcoins += boughtBitcoins;
            totalAmountOfMoney -= boughtBitcoins * oneBitcoinPrice;
        }
    });

    console.log(`Bought bitcoins: ${totalBoughtBitcoins}`);

    if (totalBoughtBitcoins !== 0) {
        console.log(firstPurchasedBitcoin);
    }

    console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
}
