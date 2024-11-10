#include <iostream>

using namespace std;

class Solution
{
public:
    int countHomogenous(string s)
    {
        const int mod = 1e9 + 7;
        long long ans = 0;
        int count = 1;
        for (int i = 1; i < s.size(); i++)
        {
            if (s[i] == s[i - 1])
            {
                count++;
            }
            else
            {
                ans += (long long)count * (count + 1) / 2;
                count = 1;
            }
        }
        ans += (long long)count * (count + 1) / 2;
        return ans % mod;
    }
};