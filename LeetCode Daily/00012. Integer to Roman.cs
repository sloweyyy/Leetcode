public class Solution
{
    public string IntToRoman(int num)
    {
        var result = new StringBuilder();
        var values = new int[] { 1000, 900, 500, 400, 100, 90, 50, 40,
            10, 9, 5, 4, 1 };
        var symbols = new string[] { "M", "CM", "D", "CD", "C", "XC", "L",
            "XL", "X", "IX", "V", "IV", "I" };

        for (int i = 0; i < values.Length; ++i)
        {
            while (num >= values[i])
            {
                num -= values[i];
                result.Append(symbols[i]);
            }
        }

        return result.ToString();
    }
}