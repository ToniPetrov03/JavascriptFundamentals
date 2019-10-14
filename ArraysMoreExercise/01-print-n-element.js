function solve(arr) {
    const step = parseInt(arr.pop());

    console.log(arr.filter((_, index) => index % step === 0).join(' '));
}
