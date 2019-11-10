function solve(arr) {
    const storage = new Map();

    arr.forEach(itemAndQuantity => {
        itemAndQuantity = itemAndQuantity.split(' ');

        const item = itemAndQuantity[0];
        const quantity = +itemAndQuantity[1];

        if (storage.has(item)) {
            const oldQuantity = storage.get(item);

            storage.set(item, oldQuantity + quantity);
        } else {
            storage.set(item, quantity);
        }
    });

    storage.forEach((value, key) => console.log(key + ' -> ' + value));
}
