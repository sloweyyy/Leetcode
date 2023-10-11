public class Solution
{
    public IList<string> LetterCombinations(string digits)
    {
        var result = new List<string>();
        if (digits.Length == 0)
        {
            return result;
        }
        var map = new Dictionary<char, string> {
            {'2', "abc"}, {'3', "def"}, {'4', "ghi"},
            {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"},
            {'8', "tuv"}, {'9', "wxyz"}
        };
        var queue = new Queue<string>();
        queue.Enqueue("");
        for (var i = 0; i < digits.Length; i++)
        {
            var digit = digits[i];
            var count = queue.Count;
            for (var j = 0; j < count; j++)
            {
                var s = queue.Dequeue();
                var letters = map[digit];
                for (var k = 0; k < letters.Length; k++)
                {
                    queue.Enqueue(s + letters[k]);
                }
            }
        }
        while (queue.Count > 0)
        {
            result.Add(queue.Dequeue());
        }
        return result;
    }
}