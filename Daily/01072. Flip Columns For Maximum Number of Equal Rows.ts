function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const map = new Map<string, number>();
  for (let row of matrix) {
    let key = ''; 
    if (row[0] === 0) {
      key = row.join('');
    } else {
      key = row.map((n) => n ^ 1).join('');
    }

    map.set(key, (map.get(key) || 0) + 1);
  }

  return Math.max(...Array.from(map.values()));
};
