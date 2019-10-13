function solve(array) {
    let sequenceLength = 1;
    let maxSequenceLength = 1;
    let sequenceStart = 0;
    let maxSequenceStart = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] === array[i]) {
            sequenceLength++;

            if (sequenceLength > maxSequenceLength) {
                maxSequenceLength = sequenceLength;
                maxSequenceStart = sequenceStart;
            }
        } else {
            sequenceLength = 1;
            sequenceStart = i;
        }
    }

    const sequence = array.slice(maxSequenceStart, maxSequenceStart + maxSequenceLength);

    console.log(sequence.join(' '));
}
