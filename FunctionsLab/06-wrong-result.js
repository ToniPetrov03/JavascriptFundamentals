function solve(firstNum, secondNum, thirdNum){
    const negativeOrPositive = firstNum * secondNum * thirdNum < 0 ? 'Negative' : 'Positive';

    console.log(negativeOrPositive);
}
