class Storage {
    constructor(capacity, storage = [], totalCost = 0) {
        this.capacity = capacity;
        this.storage = storage;
        this.totalCost = totalCost;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this.storage.map(x => JSON.stringify(x)).join('\n');
    }
}
