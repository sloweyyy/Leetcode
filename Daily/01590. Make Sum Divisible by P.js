/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
  let totalSum = nums.reduce((a, b) => a + b, 0);

  let rem = totalSum % p;
  if (rem === 0) return 0;  

  let prefixMod = new Map();
  prefixMod.set(0, -1);  
  let prefixSum = 0;
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
      prefixSum += nums[i];
      let currentMod = prefixSum % p;
      let targetMod = (currentMod - rem + p) % p;

      if (prefixMod.has(targetMod)) {
          minLength = Math.min(minLength, i - prefixMod.get(targetMod));
      }

      prefixMod.set(currentMod, i);
  }

  return minLength === nums.length ? -1 : minLength;
};