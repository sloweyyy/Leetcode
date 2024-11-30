function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    const dfs = (str: string, left: number, right: number) => {
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) {
            dfs(str + "(", left - 1, right);
        }
        if (right > left) {
            dfs(str + ")", left, right - 1);
        }
    };
    dfs("", n, n);
    return result;
}
