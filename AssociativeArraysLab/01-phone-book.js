function solve(arr) {
    const phoneBook = {};

    arr.forEach(nameAndPhoneNumber => {
        nameAndPhoneNumber = nameAndPhoneNumber.split(' ');

        const name = nameAndPhoneNumber[0];
        const number = nameAndPhoneNumber[1];

        phoneBook[name] = number;
    });

    for (const name in phoneBook) {
        console.log(name + ' -> ' + phoneBook[name]);
    }
}
