function solve(arr) {
    const regex = new RegExp(/(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/, 'm');

    for (let i = 1; i <= arr[0]; i++) {
        const password = regex.exec(arr[i]);

        if (password) {
            console.log('Password: ' + password[2] + password[3] + password[4] + password[5]);
        } else {
            console.log('Try another password!');
        }
    }
}
