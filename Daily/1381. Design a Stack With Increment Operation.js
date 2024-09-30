class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return -1;
        }
        return this.stack.pop();
    }

    increment(k, val) {
        for (let i = 0; i < Math.min(k, this.stack.length); i++) {
            this.stack[i] += val;
        }
    }
}

const stk = new CustomStack(3);
stk.push(1); // stack becomes [1]
stk.push(2); // stack becomes [1, 2]
console.log(stk.pop()); // return 2, stack becomes [1]
stk.push(2); // stack becomes [1, 2]
stk.push(3); // stack becomes [1, 2, 3]
stk.push(4); // stack still [1, 2, 3]
stk.increment(5, 100); // stack becomes [101, 102, 103]
stk.increment(2, 100); // stack becomes [201, 202, 103]
console.log(stk.pop()); // return 103, stack becomes [201, 202]
console.log(stk.pop()); // return 202, stack becomes [201]
console.log(stk.pop()); // return 201, stack becomes []
console.log(stk.pop()); // return -1, stack is empty
