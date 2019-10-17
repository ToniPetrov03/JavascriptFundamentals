function solve(length, numNumbers) {
    const sequence = [1];

    for (let i = 1; i < length; i++) {
        const start = i - numNumbers > 0 ? i - numNumbers : 0;
        const end = i - 1;

        let sum = 0;

        for (let j = end; j >= start; j--) {
            sum += sequence[j];
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}
