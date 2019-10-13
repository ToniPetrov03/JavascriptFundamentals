function solve(array, numberOfRotations){
    if (numberOfRotations > array.length) {
        numberOfRotations = numberOfRotations % array.length;
    }

    const rotatedArray = [...array.slice(numberOfRotations, array.length), ...array.slice(0, numberOfRotations)];
    const result = rotatedArray.join(" ");

    console.log(result);
}
