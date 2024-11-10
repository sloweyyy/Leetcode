function maxMoves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  let dp = new Array(m).fill(0);

  for (let j = 1; j < n; j++) {
    let leftTop = 0;
    let found = false;

    for (let i = 0; i < m; i++) {
      let cur = -1;
      let nxtLeftTop = dp[i];

      if (i - 1 >= 0 && leftTop !== -1 && grid[i][j] > grid[i - 1][j - 1]) {
        cur = Math.max(cur, leftTop + 1);
      }

      if (dp[i] !== -1 && grid[i][j] > grid[i][j - 1]) {
        cur = Math.max(cur, dp[i] + 1);
      }

      if (i + 1 < m && dp[i + 1] !== -1 && grid[i][j] > grid[i + 1][j - 1]) {
        cur = Math.max(cur, dp[i + 1] + 1);
      }

      dp[i] = cur;
      found = found || (dp[i] !== -1);
      leftTop = nxtLeftTop;
    }

    if (!found) break;
    res = j;
  }

  return res;
}