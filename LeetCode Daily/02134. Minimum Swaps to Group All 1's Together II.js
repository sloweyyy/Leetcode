var minSwaps = function (nums) {
    var totalOnes = nums.reduce((count, num) => count + num, 0);
    var minSwaps = Infinity;

    // Append the original array to itself
    nums = nums.concat(nums);

    // Initialize pointers and counts
    var left = 0;
    var right = 0;
    var currentOnes = 0;

    // Move the right pointer to the right by totalOnes positions
    while (right < totalOnes) {
        currentOnes += nums[right];
        right++;
    }

    // Slide the window and update counts
    while (right < nums.length) {
        // Calculate the number of swaps required for the current subarray
        var swaps = totalOnes - currentOnes;
        minSwaps = Math.min(minSwaps, swaps);

        // Move the window
        currentOnes += nums[right] - nums[left];
        left++;
        right++;
    }

    return minSwaps;
};
