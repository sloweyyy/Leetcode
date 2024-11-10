/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  let max = 0;
  let count = 0;
  
  for (let i = 0; i < (1 << nums.length); i++) {
    let or = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        or |= nums[j];
      }
    }
    if (or > max) {
      max = or;
      count = 1;
    } else if (or === max) {
      count++;
    }
  }
  
  return count;
};