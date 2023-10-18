public class Solution
{
    public int MinimumTime(int n, int[][] relations, int[] time)
    {
        List<List<int>> graph = new List<List<int>>();
        for (int i = 0; i < n; i++)
        {
            graph.Add(new List<int>());
        }

        foreach (int[] relation in relations)
        {
            int prev = relation[0] - 1;
            int next = relation[1] - 1;
            graph[next].Add(prev);
        }

        int[] memo = new int[n];
        int overallMinTime = 0;

        for (int course = 0; course < n; course++)
        {
            overallMinTime = Math.Max(overallMinTime, CalculateTime(course, graph, time, memo));
        }

        return overallMinTime;
    }

    private int CalculateTime(int course, List<List<int>> graph, int[] time, int[] memo)
    {
        if (memo[course] != 0)
        {
            return memo[course];
        }

        int maxPrerequisiteTime = 0;
        foreach (int prereq in graph[course])
        {
            maxPrerequisiteTime = Math.Max(maxPrerequisiteTime, CalculateTime(prereq, graph, time, memo));
        }

        memo[course] = maxPrerequisiteTime + time[course];
        return memo[course];
    }
}