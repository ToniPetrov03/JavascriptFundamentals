function solve(arr) {
    const desiredThickness = arr.shift();

    arr.forEach(thickness => {
        console.log(`Processing chunk ${thickness} microns`);

        thickness = cutting(thickness);
        thickness = lapping(thickness);
        thickness = grinding(thickness);
        thickness = etching(thickness);
        xRay(thickness);

        console.log(`Finished crystal ${desiredThickness} microns`);
    });

    function cutting(thickness) {
        const cutIsPossible = t => t / 4 >= desiredThickness - 1;

        if (cutIsPossible(thickness)) {
            let cutCounter = 0;

            while (cutIsPossible(thickness)) {
                thickness /= 4;

                cutCounter++;
            }

            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');
        }

        return thickness;
    }

    function lapping(thickness) {
        const lapIsPossible = t => t * 0.8 >= desiredThickness - 1;

        if (lapIsPossible(thickness)) {
            let lapCounter = 0;

            while (lapIsPossible(thickness)) {
                thickness *= 0.8;

                lapCounter++;
            }

            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');
        }

        return thickness;
    }

    function grinding(thickness) {
        const grindIsPossible = t => t - 20 >= desiredThickness - 1;

        if (grindIsPossible(thickness)) {
            let grindCounter = 0;

            while (grindIsPossible(thickness)) {
                thickness -= 20;

                grindCounter++;
            }

            console.log(`Grind x${grindCounter}`);
            console.log('Transporting and washing');
        }

        return thickness;
    }

    function etching(thickness) {
        const etchIsPossible = t => t - 2 >= desiredThickness - 1;

        if (etchIsPossible(thickness)) {
            let etchCounter = 0;

            while (etchIsPossible(thickness)) {
                thickness -= 2;

                etchCounter++;
            }

            console.log(`Etch x${etchCounter}`);
            console.log('Transporting and washing');
        }

        return thickness;
    }

    function xRay(thickness) {
        const needsXRay = thickness + 1 === desiredThickness;

        if (needsXRay) {
            console.log(`X-ray x1`);
        }
    }
}
