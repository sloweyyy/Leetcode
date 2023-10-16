function getRow(rowIndex: number): number[] {
    const ans = [1]
    for (let i = 1; i <= rowIndex; ++i) {
        ans.push(ans[i - 1] * (rowIndex - i + 1) / i)
    }
    return ans
};