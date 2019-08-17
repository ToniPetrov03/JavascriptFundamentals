function solve(arrayOfNumbers) {
    function calculateCondensed(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        let condensed = [];

        for (let i = 0; i < nums.length - 1; i++) {
            condensed.push(nums[i] + nums[i + 1]);
        }

        return calculateCondensed(condensed);
    }

    console.log(calculateCondensed(arrayOfNumbers));
}
