public class Solution
{
    public int MinimumTime(int n, int[][] relations, int[] time)
    {
        // Build the graph
        List<int>[] graph = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            graph[i] = new List<int>();
        }
        int[] indegrees = new int[n];
        foreach (int[] relation in relations)
        {
            int prev = relation[0] - 1;
            int next = relation[1] - 1;
            graph[prev].Add(next);
            indegrees[next]++;
        }

        // Topological sorting
        Queue<int> queue = new Queue<int>();
        for (int i = 0; i < n; i++)
        {
            if (indegrees[i] == 0)
            {
                queue.Enqueue(i);
            }
        }
        int[] order = new int[n];
        int index = 0;
        while (queue.Count > 0)
        {
            int curr = queue.Dequeue();
            order[index++] = curr;
            foreach (int next in graph[curr])
            {
                indegrees[next]--;
                if (indegrees[next] == 0)
                {
                    queue.Enqueue(next);
                }
            }
        }

        // Calculate the minimum time required
        int[] maxTime = new int[n];
        int result = 0;
        foreach (int curr in order)
        {
            int currTime = time[curr];
            foreach (int prev in graph[curr])
            {
                currTime = Math.Max(currTime, maxTime[prev] + time[curr]);
            }
            maxTime[curr] = currTime;
            result = Math.Max(result, currTime);
        }
        return result;
    }
}