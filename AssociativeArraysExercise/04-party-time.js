function solve(arr) {
    const listOfGuests = arr.filter(guest => guest !== 'PARTY');

    const guests = listOfGuests.reduce((obj, guest) => (obj[guest] ? delete obj[guest] : (isNumericChar(guest[0]) ? obj[guest] = 'vip' : obj[guest] = 'regular'), obj), {});

    const sortedGuests = Object.keys(guests).sort((a, b) => guests[b].localeCompare(guests[a]));

    return [sortedGuests.length, ...sortedGuests].join('\n');

    function isNumericChar(char) {
        return /[0-9]/.test(char);
    }
}
