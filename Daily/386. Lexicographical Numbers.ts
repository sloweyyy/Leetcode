function lexicalOrder(n: number): number[] {
    let res: number[] = [];
    for (let i = 1; i < 10; i++) {
        dfs(i, n, res);
    }
    return res;
};

function dfs(curr: number, n: number, res: number[]): void {
    if (curr > n) {
        return;
    }

    res.push(curr);

    for (let i = 0; i < 10; i++) {
        if (curr * 10 + i > n) {
            return;
        }

        dfs(curr * 10 + i, n, res);
    }
}