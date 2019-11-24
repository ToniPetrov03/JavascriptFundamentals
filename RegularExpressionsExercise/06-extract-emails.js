function solve(text) {
    const regex = new RegExp(/(?:[a-z0-9]+[._-])*[a-z0-9]+@(?:[a-z0-9]+[._-])+[a-z0-9]+/,'gi');

    const validEmails = text[0].match(regex);

    console.log(validEmails.join('\n'));
}
