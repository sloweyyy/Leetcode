function maxMatrixSum(matrix: number[][]): number {
    let negCount = 0;
    let min = Infinity;
    let sum = 0;
    for (let row of matrix) {
        for (let num of row) {
            sum += Math.abs(num);
            if (num < 0) {
                negCount++;
            }
            min = Math.min(min, Math.abs(num));
        }
    }
    return negCount % 2 === 0 ? sum : sum - 2 * min;  
};