public class Solution
{
    public bool IsValid(string s)
    {
        var stack = new Stack<char>();
        foreach (var c in s)
        {
            if (c == '(' || c == '[' || c == '{')
            {
                stack.Push(c);
            }
            else if (c == ')' && stack.Count > 0 && stack.Peek() == '(')
            {
                stack.Pop();
            }
            else if (c == ']' && stack.Count > 0 && stack.Peek() == '[')
            {
                stack.Pop();
            }
            else if (c == '}' && stack.Count > 0 && stack.Peek() == '{')
            {
                stack.Pop();
            }
            else
            {
                return false;
            }
        }
        return stack.Count == 0;
    }
}