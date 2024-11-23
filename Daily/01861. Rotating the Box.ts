function rotateTheBox(box: string[][]): string[][] {
  const m = box.length;
  const n = box[0].length;
  const rotatedBox: string[][] = Array.from({ length: n }, () => Array(m).fill(''));

  for (let i = 0; i < m; i++) {
    let emptySlot = n - 1;
    for (let j = n - 1; j >= 0; j--) {
      if (box[i][j] === '*') {
        emptySlot = j - 1;
      } else if (box[i][j] === '#') {
        box[i][j] = '.';
        box[i][emptySlot--] = '#';
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotatedBox[j][m - 1 - i] = box[i][j];
    }
  }

  return rotatedBox;
}