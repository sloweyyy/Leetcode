/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const len = nums.length;
    if (len <= 1) {
        return nums;
    }

    if (len <= 10) {
        return insertionSort(nums);
    }

    mergeSort(nums, 0, len - 1);
    return nums;
};

function mergeSort(nums, left, right) {
    if (left >= right) {
        return;
    }

    const mid = Math.floor((left + right) / 2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
    const leftArr = nums.slice(left, mid + 1);
    const rightArr = nums.slice(mid + 1, right + 1);

    let i = 0,
        j = 0,
        k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            nums[k++] = leftArr[i++];
        } else {
            nums[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.length) {
        nums[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
        nums[k++] = rightArr[j++];
    }
}

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        let j = i - 1;

        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = current;
    }

    return nums;
}
