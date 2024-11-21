function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  let grid = Array.from({ length: m }, () => Array(n).fill(''));

  for (let [r, c] of guards) {
    grid[r][c] = 'G';
  }

  for (let [r, c] of walls) {
    grid[r][c] = 'W';
  }

  for (let [r, c] of guards) {
    markGuarded(grid, r, c, m, n);
  }

  let unguarded = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === '') {
        unguarded++;
      }
    }
  }

  return unguarded;
}

function markGuarded(grid: string[][], r: number, c: number, m: number, n: number) {
  const directions = [
    [0, 1],  // right
    [0, -1], // left
    [1, 0],  // down
    [-1, 0]  // up
  ];

  for (let [dr, dc] of directions) {
    let nr = r + dr;
    let nc = c + dc;
    while (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] !== 'W') {
      if (grid[nr][nc] === 'G') break;
      grid[nr][nc] = 'X';
      nr += dr;
      nc += dc;
    }
  }
}