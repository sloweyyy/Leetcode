/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    let maxHeap = new MaxHeap(nums);
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        let maxElement = maxHeap.extractMax();
        maxSum += maxElement;
        maxHeap.insert(Math.ceil(maxElement / 3));
    }

    return maxSum;
};

class MaxHeap {
    constructor(data) {
        this.heap = [];
        data.forEach((element) => this.insert(element));
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[index],
            ];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        let length = this.heap.length;
        let leftChild, rightChild, largest;

        while (true) {
            leftChild = 2 * index + 1;
            rightChild = 2 * index + 2;
            largest = index;

            if (
                leftChild < length &&
                this.heap[leftChild] > this.heap[largest]
            ) {
                largest = leftChild;
            }

            if (
                rightChild < length &&
                this.heap[rightChild] > this.heap[largest]
            ) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [
                this.heap[largest],
                this.heap[index],
            ];
            index = largest;
        }
    }
}
