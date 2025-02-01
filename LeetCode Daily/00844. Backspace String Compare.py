class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def build(s):
            ans = []
            for c in s:
                if c != '#':
                    ans.append(c)
                elif ans:
                    ans.pop()
            return "".join(ans)
        return build(s) == build(t)