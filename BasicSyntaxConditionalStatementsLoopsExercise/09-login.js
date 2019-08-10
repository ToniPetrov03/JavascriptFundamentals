function solve(input) {
    const username = input.shift();
    const password = username.split("").reverse().join("");

    console.log(tryPasswords(input, password, 4, username));

    function tryPasswords(passwords, correctPassword, triesUntilBlocked, username) {
        let result = "";
        let tries = 0;

        passwords.forEach((password) => {
            tries++;

            if (password === correctPassword) {
                result += `User ${username} logged in.`;
            } else {
                if (tries === triesUntilBlocked) {
                    result += `User ${username} blocked!`;
                } else {
                    result += "Incorrect password. Try again.\n";
                }
            }
        });

        return result;
    }
}
