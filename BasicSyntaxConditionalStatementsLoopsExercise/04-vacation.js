function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    const studentFriday = 8.45;
    const studentSaturday = 9.8;
    const studentSunday = 10.46;
    const businessFriday = 10.9;
    const businessSaturday = 15.6;
    const businessSunday = 16;
    const regularFriday = 15;
    const regularSaturday = 20;
    const regularSunday = 22.5;
    let price = 0;

    switch (typeOfTheGroup) {
        case "Students":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = studentFriday;
                    break;
                case "Saturday":
                    price = studentSaturday;
                    break;
                case "Sunday":
                    price = studentSunday;
                    break;
            }
            break;

        case "Business":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = businessFriday;
                    break;
                case "Saturday":
                    price = businessSaturday;
                    break;
                case "Sunday":
                    price = businessSunday;
                    break;
            }
            break;

        case"Regular":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = regularFriday;
                    break;
                case "Saturday":
                    price = regularSaturday;
                    break;
                case "Sunday":
                    price = regularSunday;
                    break;
            }
            break;
    }

    let totalPrice = price * groupOfPeople;

    if (typeOfTheGroup === "Students" && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        totalPrice -= price * 10;
    } else if (typeOfTheGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
