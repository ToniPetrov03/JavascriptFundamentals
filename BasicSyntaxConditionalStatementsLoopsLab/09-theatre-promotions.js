function solve(typeOfDay, age) {
    const AGE_BETWEEN_0_AND_18_WEEKDAY = 12;
    const AGE_BETWEEN_19_AND_64_WEEKDAY = 18;
    const AGE_BETWEEN_65_AND_122_WEEKDAY = 12;
    const AGE_BETWEEN_0_AND_18_WEEKEND = 15;
    const AGE_BETWEEN_19_AND_64_WEEKEND = 20;
    const AGE_BETWEEN_65_AND_122_WEEKEND = 15;
    const AGE_BETWEEN_0_AND_18_HOLIDAY = 5;
    const AGE_BETWEEN_19_AND_64_HOLIDAY = 12;
    const AGE_BETWEEN_65_AND_122_HOLIDAY = 10;

    try {
        console.log(`${calculateSumByTypeOfDay(typeOfDay)}$`);
    } catch (e) {
        console.log(e.message);
    }

    function calculateSumByTypeOfDay(typeOfDay) {
        switch (typeOfDay) {
            case "Weekday":
                return calculateSum(
                    AGE_BETWEEN_0_AND_18_WEEKDAY,
                    AGE_BETWEEN_19_AND_64_WEEKDAY,
                    AGE_BETWEEN_65_AND_122_WEEKDAY);
            case "Weekend":
                return calculateSum(
                    AGE_BETWEEN_0_AND_18_WEEKEND,
                    AGE_BETWEEN_19_AND_64_WEEKEND,
                    AGE_BETWEEN_65_AND_122_WEEKEND);
            case "Holiday":
                return calculateSum(
                    AGE_BETWEEN_0_AND_18_HOLIDAY,
                    AGE_BETWEEN_19_AND_64_HOLIDAY,
                    AGE_BETWEEN_65_AND_122_HOLIDAY);
        }
    }

    function calculateSum(ageBetween0And18, ageBetween19And64, ageBetween65And122) {
        let sum = 0;

        if (age >= 0 && age <= 18) {
            sum += ageBetween0And18;
        } else if (age >= 19 && age <= 64) {
            sum += ageBetween19And64;
        } else if (age >= 65 && age <= 122) {
            sum += ageBetween65And122;
        } else {
            throw new Error("Error!");
        }

        return sum;
    }
}
