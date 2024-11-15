function primeSubOperation(nums: number[]): boolean {
  const maxElement = Math.max(...nums);

  // Create Sieve of Eratosthenes array
  const sieve: boolean[] = Array(maxElement + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= maxElement; i++) {
      if (sieve[i]) {
          for (let j = i * i; j <= maxElement; j += i) {
              sieve[j] = false;
          }
      }
  }

  // Check if array can be made strictly increasing
  let currValue = 1;
  for (const num of nums) {
      const difference = num - currValue;

      if (difference < 0) {
          return false;
      }

      if (sieve[difference] || difference === 0) {
          currValue++;
      } else {
          currValue++;
      }
  }
  return true;
}
