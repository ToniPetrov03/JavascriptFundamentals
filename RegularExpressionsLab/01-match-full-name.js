function solve(names) {
    const regex = new RegExp(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/, 'g');

    const validNames = names[0].match(regex).join(' ');

    console.log(validNames);
}
