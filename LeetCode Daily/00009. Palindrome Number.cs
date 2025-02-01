public class Solution
{
    public bool IsPalindrome(int x)
    {
        if (x < 0)
        {
            return false;
        }

        var result = 0;
        var temp = x;

        while (temp != 0)
        {
            var pop = temp % 10;
            temp /= 10;

            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && pop > 7))
            {
                return false;
            }

            result = result * 10 + pop;
        }

        return result == x;
    }
}