function merge(x: bigint, v: bigint): bigint {
  let result = x;
  let bit = 1n;
  while (v > 0n) {
    if ((x & bit) === 0n) {
      if ((v & 1n) === 1n) {
        result |= bit;
      }
      v >>= 1n;
    }
    bit <<= 1n;
  }
  return result;
}

function minEnd(n: number, x: number): number {
  return Number(merge(BigInt(x), BigInt(n - 1)));
}

// Runtime Complexity: O(log(n)) Beats 100% of solutions
// Space Complexity: O(1) Beats 100% of solutions