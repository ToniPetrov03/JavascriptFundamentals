class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        parts.quality = Object.values(parts).reduce((a, b) => a * b, 1);
        this.fuel = fuel;
    }

    drive(value) {
        return this.fuel -= value;
    }
}
