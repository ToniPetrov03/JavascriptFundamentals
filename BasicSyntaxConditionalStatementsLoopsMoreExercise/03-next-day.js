function solve(year, month, day) {
    let dateOfNextDay = new Date(year, month - 1, day + 1);

    let y = dateOfNextDay.getFullYear();
    let mm = dateOfNextDay.getMonth() + 1;
    let dd = dateOfNextDay.getDate();

    console.log(`${y}-${mm}-${dd}`);
}
