public class Solution
{
    public int GarbageCollection(string[] garbage, int[] travel)
    {
        List<string> garbageList = new List<string>(garbage);
        List<int> travelList = new List<int>(travel);

        int result = 0;
        int n = garbageList.Count;
        bool m = false, p = false, g = false;
        for (int i = n - 1; i >= 0; i--)
        {
            if (!g && garbageList[i].Contains('G'))
            {
                g = true;
                result += travelList.Take(i).Sum();
            }
            if (!p && garbageList[i].Contains('P'))
            {
                p = true;
                result += travelList.Take(i).Sum();
            }
            if (!m && garbageList[i].Contains('M'))
            {
                m = true;
                result += travelList.Take(i).Sum();
            }
            if (g && p && m)
            {
                break;
            }
        }
        return result + garbageList.Sum(str => str.Length);
    }
}