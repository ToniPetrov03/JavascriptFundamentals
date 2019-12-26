function solve([, ...messages]) {
    const messageEncrypter = compose(log, encryptMessage);
    messages.forEach(messageEncrypter);

    function encryptMessage(message) {
        const [, , tag, ...letters] = /([*@])([A-Z][a-z]{2,})\1: \[([A-Za-z])]\|\[([A-Za-z])]\|\[([A-Za-z])]\|$/m.exec(message) || [];

        return tag ? `${tag}: ${letters.map(ascii).join(' ')}` : 'Valid message not found!';
    }

    // UTILITIES

    function ascii(char) {
        return char.charCodeAt(0);
    }

    function compose(...fns) {
        return fns.reduceRight((acc, fn) => (...args) => fn(acc(...args)));
    }

    function log(str) {
        console.log(str);
    }
}
