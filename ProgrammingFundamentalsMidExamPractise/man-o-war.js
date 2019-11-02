function solve(arr) {
    const statusOfPirateShip = arr.shift().split('>').map(Number);
    const statusOfWarship = arr.shift().split('>').map(Number);
    const healthCapacity = +arr.shift();

    let isRetire = false;
    let hasWarshipSunken = false;
    let hasPirateShipSunken = false;

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i].split(' ');
        const comm = command.shift();

        switch (comm) {
            case 'Fire':
                const index = +command.shift();
                const damageWarship = +command.shift();

                if (index >= 0 && index < statusOfWarship.length) {
                    statusOfWarship[index] -= damageWarship;

                    if (statusOfWarship[index] <= 0) {
                        hasWarshipSunken = true;
                    }
                }
                break;
            case 'Defend':
                const startIndex = +command.shift();
                const endIndex = +command.shift();
                const damagePirateShip = +command.shift();

                const areIndexesValid =
                    startIndex >= 0 && startIndex < statusOfPirateShip.length &&
                    endIndex >= 0 && endIndex < statusOfPirateShip.length;

                if (areIndexesValid) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        statusOfPirateShip[j] -= damagePirateShip;

                        if (statusOfPirateShip[j] <= 0) {
                            hasPirateShipSunken = true;
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                const ind = +command.shift();
                const health = +command.shift();

                if (ind >= 0 && ind < statusOfPirateShip.length) {
                    statusOfPirateShip[ind] += health;

                    if (statusOfPirateShip[ind] > healthCapacity) {
                        statusOfPirateShip[ind] = healthCapacity;
                    }
                }
                break;
            case 'Status':
                const countSectionNeedRepair = statusOfPirateShip.filter(section => section < healthCapacity * 0.2).length;

                console.log(`${countSectionNeedRepair} sections need repair.`);
                break;
            case 'Retire':
                isRetire = true;
                break;
        }

        if (hasWarshipSunken) {
            console.log('You won! The enemy ship has sunken.');
            break;
        } else if (hasPirateShipSunken) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        } else if (isRetire) {
            break;
        }
    }

    if (!hasPirateShipSunken && !hasWarshipSunken) {
        const sumOfSectionsOfPirateShip = statusOfPirateShip.reduce((a, b) => a + b);
        const sumOfSectionsOfWarship = statusOfWarship.reduce((a, b) => a + b);

        console.log(`Pirate ship status: ${sumOfSectionsOfPirateShip}`);
        console.log(`Warship status: ${sumOfSectionsOfWarship}`);
    }
}
