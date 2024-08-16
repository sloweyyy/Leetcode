public class Solution
{
    public int MaxDistance(IList<IList<int>> arrays)
    {
        int res = 0, minVal = arrays[0][0], maxVal = arrays[0][arrays[0].Count - 1];
        for (int i = 1; i < arrays.Count; i++)
        {
            res = Math.Max(res, Math.Max(Math.Abs(arrays[i][arrays[i].Count - 1] - minVal), Math.Abs(maxVal - arrays[i][0])));
            minVal = Math.Min(minVal, arrays[i][0]);
            maxVal = Math.Max(maxVal, arrays[i][arrays[i].Count - 1]);
        }
        return res;
    }
}