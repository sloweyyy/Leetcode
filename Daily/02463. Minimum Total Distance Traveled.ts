function minimumTotalDistance(robot: number[], factory: number[][]): number {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);
  
  const dp = Array(robot.length + 1).fill(0).map(() => Array(factory.length + 1).fill(Infinity));
  dp[0][0] = 0;
  
  for (let i = 0; i <= robot.length; i++) {
    for (let j = 1; j <= factory.length; j++) {
      let totalDistance = 0;
      for (let k = 0; k <= Math.min(i, factory[j - 1][1]); k++) {
        if (i - k >= 0) {
          if (k > 0) {
            totalDistance += Math.abs(robot[i - k] - factory[j - 1][0]);
          }
          dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + totalDistance);
        }
      }
    }
  }
  
  return dp[robot.length][factory.length];
};