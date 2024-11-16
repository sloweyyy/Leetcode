function resultsArray(nums: number[], k: number): number[] {
  let results: number[] = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let subarray = nums.slice(i, i + k);
    let isConsecutive = true;
    for (let j = 1; j < subarray.length; j++) {
      if (subarray[j] !== subarray[j - 1] + 1) {
        isConsecutive = false;
        break;
      }
    }
    if (isConsecutive) {
      results.push(Math.max(...subarray));
    } else {
      results.push(-1);
    }
  }
  return results;
}