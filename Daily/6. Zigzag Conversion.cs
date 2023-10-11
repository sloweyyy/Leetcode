public class Solution
{
    public string Convert(string s, int numRows)
    {
        if (numRows == 1)
        {
            return s;
        }

        var n = s.Length;
        var result = new StringBuilder();
        var cycle = 2 * numRows - 2;

        for (int i = 0; i < numRows; ++i)
        {
            for (int j = 0; j + i < n; j += cycle)
            {
                result.Append(s[j + i]);

                if (i != 0 && i != numRows - 1 && j + cycle - i < n)
                {
                    result.Append(s[j + cycle - i]);
                }
            }
        }

        return result.ToString();
    }
}