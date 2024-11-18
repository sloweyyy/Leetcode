function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return Array(code.length).fill(0);
  }

  let prefixSum = [0];
  for (let i = 0; i < code.length * 2; i++) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + code[i % code.length]);
  }

  let result = [];
  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      result.push(prefixSum[i + k + 1] - prefixSum[i + 1]);
    } else {
      result.push(prefixSum[i + code.length] - prefixSum[i + code.length + k]);
    }
  }

  return result;  
};