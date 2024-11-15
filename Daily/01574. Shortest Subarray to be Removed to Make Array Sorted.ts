function findLengthOfShortestSubarray(arr: number[]): number {
  const n = arr.length;
  let left = 0;
  while (left + 1 < n && arr[left] <= arr[left + 1]) left++;
  if (left === n - 1) return 0;

  let right = n - 1;
  while (right - 1 >= 0 && arr[right - 1] <= arr[right]) right--;

  let result = Math.min(n - left - 1, right);
  let i = 0;
  let j = right;
  while (i <= left && j < n) {
    if (arr[j] >= arr[i]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return result;  
};