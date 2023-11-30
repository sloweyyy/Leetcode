class Solution {
public:
    int countElements(vector<int>& nums) {
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            bool hasSmaller = false;
            bool hasGreater = false;
            for (int j = 0; j < nums.size(); j++) {
                if (i != j) {
                    if (nums[j] < nums[i]) {
                        hasSmaller = true;
                    }
                    if (nums[j] > nums[i]) {
                        hasGreater = true;
                    }
                }
            }
            if (hasSmaller && hasGreater) {
                count++;
            }
        }
        return count;
    }
};
        
