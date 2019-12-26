/**
 * Function that given the string and then commands, executes changes over a string.
 * Possible commands:
 •    "Change {char} {replacement}"
 o    Replace all occurrences of {char} with {replacement}, then print the string.
 •    "Includes {string}"
 o    Check if the string includes with {string} and print "True/False".
 •    "End {string}"
 o    Check if the string ends with {string} and print "True/False".
 •    "Uppercase"
 o    Make the whole string uppercase, then print it.
 •    "FindIndex {char}"
 o    Find the first index of {char}, then print it.
 •    "Cut {startIndex} {length}"
 o    Remove all characters from the string except for those starting from {startIndex} and the next {length} characters, then print it.
 * @param {Array} arr
 */

function solve([input, ...commands]) {
    const logInterceptor =
        fn =>
            (...args) => {
                const result = fn(...args);
                log(result);
                return result;
            };

    const changeAndLog = logInterceptor(change);
    const cutAndLog = logInterceptor(cut);
    const upperCaseAndLog = logInterceptor(upperCase);
    const logResultOfIncludes = partial(tap, compose(log, convertBooleanToString, includes));
    const logResultOfEnd = partial(tap, compose(log, convertBooleanToString, end));
    const logResultOfFindIndex = partial(tap, compose(log, indexOf));

    const possibleCommands = {
        'Change': changeAndLog,
        'Cut': cutAndLog,
        'Uppercase': upperCaseAndLog,
        'Includes': logResultOfIncludes,
        'End': logResultOfEnd,
        'FindIndex': logResultOfFindIndex
    };

    const generateFunction = command => {
        const [commandType, ...args] = splitBySpace(command);
        return partialRight(possibleCommands[commandType], ...args)
    };

    const commandsToExecute = sliceFromBeginning(commands, indexOf(commands, 'Done'));
    commandsToExecute.map(generateFunction).reduce((acc, fn) => fn(acc), input);

    // UTILITIES

    function change(str, char, replacement) {
        const regex = new RegExp(char, 'g');

        return str.replace(regex, replacement);
    }

    function includes(str, search) {
        return str.includes(search);
    }

    function end(str, search) {
        return str.endsWith(search);
    }

    function upperCase(str) {
        return str.toUpperCase();
    }

    function indexOf(collection, search) {
        return collection.indexOf(search);
    }

    function cut(str, startIndex, length) {
        const start = parseInt(startIndex, 10);
        const end = start + parseInt(length, 10);

        return str.substring(start, end);
    }

    function convertBooleanToString(boolean) {
        return boolean ? 'True' : 'False';
    }

    function partialRight(fn, ...presetArgs) {
        return (...laterArgs) => fn(...laterArgs, ...presetArgs);
    }

    function partial(fn, ...presetArgs) {
        return (...laterArgs) => fn(...presetArgs, ...laterArgs);
    }

    function compose(...fns) {
        return fns.reduceRight((acc, fn) => (...args) => fn(acc(...args)));
    }

    function sliceFromBeginning(arr, end) {
        return arr.slice(0, end);
    }

    function split(collection, separator) {
        return collection.split(separator);
    }

    function splitBySpace(collection) {
        return split(collection, ' ');
    }

    function tap(interceptor, value, ...args) {
        interceptor(value, ...args);
        return value;
    }

    function log(str) {
        console.log(str);
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);

/* Output:
//This is my string!//
True
False
//THIS IS MY STRING!//
4
S IS
*/
