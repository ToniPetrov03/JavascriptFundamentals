function solve(phoneNumbers) {
    const regex = new RegExp(/(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/, 'g');

    const validPhoneNumbers = phoneNumbers[0].match(regex).join(', ');

    console.log(validPhoneNumbers);
}
