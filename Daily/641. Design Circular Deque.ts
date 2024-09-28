class MyCircularDeque {
    private deque: number[];
    private maxSize: number;
    private front: number;
    private rear: number;
    private count: number;

    constructor(k: number) {
        this.maxSize = k;
        this.deque = new Array(k);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.front = (this.front - 1 + this.maxSize) % this.maxSize;
        this.deque[this.front] = value;
        this.count++;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.deque[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.count++;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.front = (this.front + 1) % this.maxSize;
        this.count--;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
        this.count--;
        return true;
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.deque[this.front];
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.deque[(this.rear - 1 + this.maxSize) % this.maxSize];
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.maxSize;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */