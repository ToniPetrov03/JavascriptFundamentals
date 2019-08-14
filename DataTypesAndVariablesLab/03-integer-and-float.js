function solve(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const integerOrFloat = sum % 1 === 0 ? " - Integer" : " - Float";

    console.log(sum + integerOrFloat);
}
