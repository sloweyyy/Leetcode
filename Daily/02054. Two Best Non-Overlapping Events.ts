function maxTwoEvents(events: number[][]): number {
  events.sort((a, b) => a[1] - b[1]); // Sort by end time

  let maxSingleEvent = 0;
  let maxSum = 0;
  const dp: number[] = new Array(events.length).fill(0);

  for (let i = 0; i < events.length; i++) {
    dp[i] = events[i][2];
    if (i > 0) {
      dp[i] = Math.max(dp[i], dp[i - 1]);
    }
    maxSingleEvent = Math.max(maxSingleEvent, events[i][2]);
  }

  for (let i = 0; i < events.length; i++) {
    let left = 0, right = i - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (events[mid][1] < events[i][0]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (right >= 0) {
      maxSum = Math.max(maxSum, events[i][2] + dp[right]);
    } else {
      maxSum = Math.max(maxSum, events[i][2]);
    }
  }

  return maxSum;
}