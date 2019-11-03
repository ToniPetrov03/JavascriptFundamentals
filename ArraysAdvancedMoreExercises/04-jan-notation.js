function solve(arr) {
    const numbers = [];

    arr.forEach(instruction => {
        if (!isNaN(instruction)) {
            numbers.push(instruction);
        } else {
            const lastNumber = numbers.pop();
            const penultimateNumber = numbers.pop();

            if (penultimateNumber && lastNumber) {
                switch (instruction) {
                    case '+': numbers.push(penultimateNumber + lastNumber); break;
                    case '-': numbers.push(penultimateNumber - lastNumber); break;
                    case '*': numbers.push(penultimateNumber * lastNumber); break;
                    case '/': numbers.push(penultimateNumber / lastNumber); break;
                }
            }
        }
    });

    if (numbers.length > 1) {
        console.log('Error: too many operands!');
    } else if (arr.length % 2 === 1 && numbers.length === 1) {
        console.log(numbers[0]);
    } else {
        console.log('Error: not enough operands!');
    }
}
