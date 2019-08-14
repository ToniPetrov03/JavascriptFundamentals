function solve(distance, passengers, price) {
    const neededFuel = distance / 100 * 7 + passengers * 0.1;
    const neededMoney = neededFuel * price;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
