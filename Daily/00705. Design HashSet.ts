class MyHashSet {
    private values: number[];

    constructor() {
        this.values = [];
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.values.push(key);
        }
    }

    remove(key: number): void {
        const index = this.values.indexOf(key);
        if (index !== -1) {
            this.values.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        return this.values.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */