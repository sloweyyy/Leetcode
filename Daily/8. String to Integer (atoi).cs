public class Solution
{
    public int MyAtoi(string s)
    {
        var n = s.Length;
        var result = 0;
        var sign = 1;
        var i = 0;

        while (i < n && s[i] == ' ')
        {
            i++;
        }

        if (i < n && (s[i] == '+' || s[i] == '-'))
        {
            sign = s[i++] == '+' ? 1 : -1;
        }

        while (i < n && s[i] >= '0' && s[i] <= '9')
        {
            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && s[i] - '0' > 7))
            {
                return sign == 1 ? int.MaxValue : int.MinValue;
            }

            result = result * 10 + (s[i++] - '0');
        }

        return result * sign;
    }
}