/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 * public int get(int index) {}
 * public int length() {}
 * }
 */

class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int peak = findPeak(mountainArr);
        int left = binarySearch(mountainArr, 0, peak, target, true);
        if (left != -1) {
            return left;
        }
        return binarySearch(mountainArr, peak + 1, mountainArr.length() - 1, target, false);
    }
}