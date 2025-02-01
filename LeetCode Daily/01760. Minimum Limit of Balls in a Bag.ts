function minimumSize(nums: number[], maxOperations: number): number {
    let left = 1;
    let right = Math.max(...nums);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let operations = 0;

        for (const num of nums) {
            operations += Math.ceil(num / mid) - 1;
        }

        if (operations > maxOperations) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};