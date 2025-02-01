function slidingPuzzle(board: number[][]): number {
    const target = "123450";
    const start = board.map((row) => row.join("")).join("");
    const moves = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4],
    ];
    const queue = [start];
    const visited = new Set<string>();
    visited.add(start);
    let step = 0;
    while (queue.length) {
        const next = [];
        for (const cur of queue) {
            if (cur === target) {
                return step;
            }
            const zero = cur.indexOf("0");
            for (const move of moves[zero]) {
                const nextBoard = swap(cur, zero, move);
                if (!visited.has(nextBoard)) {
                    next.push(nextBoard);
                    visited.add(nextBoard);
                }
            }
        }
        queue.length = 0;
        queue.push(...next);
        step++;
    }
    return -1;
}

function swap(board: string, i: number, j: number): string {
    const arr = board.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
}
