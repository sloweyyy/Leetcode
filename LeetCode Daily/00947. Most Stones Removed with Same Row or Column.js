class UnionFind {
    constructor() {
        this.parent = {};
        this.rank = {};
    }

    find(x) {
        if (!(x in this.parent)) {
            this.parent[x] = x;
            this.rank[x] = 1;
        }
        if (x !== this.parent[x]) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }
}

var removeStones = function (stones) {
    const uf = new UnionFind();

    for (const [x, y] of stones) {
        uf.union(x, y + 100000);
    }

    const uniqueRoots = new Set();
    for (const [x, y] of stones) {
        uniqueRoots.add(uf.find(x));
    }

    return stones.length - uniqueRoots.size;
};

const stones = [
    [0, 0],
    [2, 2],
    [10000, 2],
];
console.log(removeStones(stones));

const stones1 = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
];
console.log(removeStones(stones1));

const stones2 = [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
];
console.log(removeStones(stones2));

const stones3 = [[0, 0]];
console.log(removeStones(stones3));
