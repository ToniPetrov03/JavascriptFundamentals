function solve(centuries) {
    const YEARS_OF_CENTURY = 100;
    const DAYS_OF_YEAR = 365.2422;
    const HOURS_OF_DAY = 24;
    const MINUTES_OF_HOUR = 60;

    const years = centuries * YEARS_OF_CENTURY;
    const days = Math.trunc(years * DAYS_OF_YEAR);
    const hours = days * HOURS_OF_DAY;
    const minutes = hours * MINUTES_OF_HOUR;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
