function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function primeSubOperation(nums: number[]): boolean {
  const primes: number[] = [];
  for (let i = 2; i < 1000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  for (let i = nums.length - 1; i > 0; i--) {
    let found = false;
    for (const prime of primes) {
      if (nums[i] - prime > nums[i - 1]) {
        nums[i] -= prime;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }

  return true;
}