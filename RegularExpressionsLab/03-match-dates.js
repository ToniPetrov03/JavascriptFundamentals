function solve(dates) {
    const regex = new RegExp(/\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/, 'g');

    while (true) {
        const validDate = regex.exec(dates);

        if (validDate === null) {
            break;
        }

        const day = validDate.groups.day;
        const month = validDate.groups.month;
        const year = validDate.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
