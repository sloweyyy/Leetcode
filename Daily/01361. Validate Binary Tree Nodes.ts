function validateBinaryTreeNodes(
    n: number,
    leftChild: number[],
    rightChild: number[],
): boolean {
    const parents = new Array(n).fill(-1);
    for (let i = 0; i < n; ++i) {
        const left = leftChild[i];
        const right = rightChild[i];
        if (left !== -1) {
            if (parents[left] !== -1) return false;
            parents[left] = i;
        }
        if (right !== -1) {
            if (parents[right] !== -1) return false;
            parents[right] = i;
        }
    }
    let root = -1;
    for (let i = 0; i < n; ++i) {
        if (parents[i] === -1) {
            if (root !== -1) return false;
            root = i;
        }
    }
    if (root === -1) return false;
    const visited = new Array(n).fill(false);
    const stack = [root];
    while (stack.length) {
        const node = stack.pop()!;
        if (visited[node]) return false;
        visited[node] = true;
        const left = leftChild[node];
        if (left !== -1) stack.push(left);
        const right = rightChild[node];
        if (right !== -1) stack.push(right);
    }
    return visited.every((v) => v);
}
