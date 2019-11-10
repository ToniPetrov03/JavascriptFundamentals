function solve(arr) {
    const journal = {};

    arr.forEach(nameAndGrades => {
        nameAndGrades = nameAndGrades.split(' ');

        const name = nameAndGrades.shift();
        const grades = nameAndGrades.map(Number);

        if (journal[name]) {
            journal[name].push(...grades);
        } else {
            journal[name] = grades;
        }
    });

    const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    const sortedNames = Object.keys(journal).sort((a, b) => average(journal[a]) - average(journal[b]));

    sortedNames.forEach(name => console.log(`${name}: ${journal[name].join(', ')}`));
}
