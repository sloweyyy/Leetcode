class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int n = arr.size();
        int count = 1;
        for(int i = 1; i < n; i++){
            if(arr[i] == arr[i-1]){
                count++;
                if(count > n/4)
                    return arr[i];
            }
            else
                count = 1;
        }
        return arr[0];
    }
};