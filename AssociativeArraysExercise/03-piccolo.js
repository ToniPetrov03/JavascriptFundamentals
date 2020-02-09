function solve(cars) {
    const parkingLot = cars.reduce((set, car) => {
        const [direction, carNumber] = car.split(', ');

        return direction === 'IN' ? set.add(carNumber) : set.delete(carNumber), set;
    }, new Set());

    return parkingLot.size ? [...parkingLot].sort((a, b) => a.localeCompare(b)).join('\n') : 'Parking Lot is Empty';
}
