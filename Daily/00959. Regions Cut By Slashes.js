var regionsBySlashes = function(grid) {
    let N = grid.length;
    let size = 4 * N * N;
    let dsu = new DSU(size);
    let count = size;
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            let root = 4 * (r * N + c);
            let val = grid[r][c];
            
            if (val === '/') {
                if (dsu.union(root, root + 3)) {
                    count--;
                }
                if (dsu.union(root + 1, root + 2)) {
                    count--;
                }
            } else if (val === '\\') {
                if (dsu.union(root, root + 1)) {
                    count--;
                }
                if (dsu.union(root + 2, root + 3)) {
                    count--;
                }
            } else {
                if (dsu.union(root, root + 1)) {
                    count--;
                }
                if (dsu.union(root + 1, root + 2)) {
                    count--;
                }
                if (dsu.union(root + 2, root + 3)) {
                    count--;
                }
            }
            
            if (r + 1 < N) {
                if (dsu.union(root + 2, root + 4 * N)) {
                    count--;
                }
            }
            if (c + 1 < N) {
                if (dsu.union(root + 1, root + 4 + 3)) {
                    count--;
                }
            }
        }
    }
    
    return count;
};

class DSU {
    constructor(size) {
        this.parent = Array(size).fill(0).map((_, i) => i);
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        
        if (rootX === rootY) {
            return false;
        }
        
        this.parent[rootX] = rootY;
        return true;
    }
}