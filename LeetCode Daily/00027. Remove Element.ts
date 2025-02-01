function removeElement(nums: number[], val: number): number {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return i;
}
