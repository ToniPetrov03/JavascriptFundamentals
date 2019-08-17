function solve(day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const nameOfDay = day >= 1 && day <= 7 ? days[day - 1] : "Invalid day!";

    console.log(nameOfDay);
}
