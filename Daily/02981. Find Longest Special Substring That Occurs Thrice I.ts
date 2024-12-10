function maximumLength(s: string): number {
  const n = s.length;
  let maxLength = -1;

  for (let len = 1; len <= n; len++) {
    const countMap: { [key: string]: number } = {};

    for (let i = 0; i <= n - len; i++) {
      const substring = s.substring(i, i + len);
      if (substring.split('').every(char => char === substring[0])) {
        countMap[substring] = (countMap[substring] || 0) + 1;
      }
    }

    for (const key in countMap) {
      if (countMap[key] >= 3) {
        maxLength = Math.max(maxLength, key.length);
      }
    }
  }

  return maxLength;
}