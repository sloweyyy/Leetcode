function findChampion(n: number, edges: number[][]): number {
  const inDegree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    inDegree[v]++;
  }

  let champion = -1;

  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      if (champion !== -1) {
        return -1; // More than one team with in-degree 0
      }
      champion = i;
    }
  }

  return champion;
}