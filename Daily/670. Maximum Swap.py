class Solution:
    def maximumSwap(self, num: int) -> int:
        s = list(str(num))
        n = len(s)
        if n < 2:
            return num
        max_right = [-1] * n
        max_right[n - 1] = n - 1
        for i in range(n - 2, -1, -1):
            if s[i] > s[max_right[i + 1]]:
                max_right[i] = i
            else:
                max_right[i] = max_right[i + 1]
        for i in range(n):
            if s[i] < s[max_right[i]]:
                s[i], s[max_right[i]] = s[max_right[i]], s[i]
                break
        return int(''.join(s))