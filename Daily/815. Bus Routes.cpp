#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int numBusesToDestination(vector<vector<int>> &routes, int source, int target)
    {
        if (source == target)
            return 0;
        int n = routes.size();
        unordered_map<int, vector<int>> stopToBus;
        for (int i = 0; i < n; i++)
        {
            for (auto &stop : routes[i])
            {
                stopToBus[stop].push_back(i);
            }
        }
        vector<bool> visited(n, false);
        queue<int> q;
        q.push(source);
        int level = 0;
        while (!q.empty())
        {
            int size = q.size();
            level++;
            while (size--)
            {
                int currStop = q.front();
                q.pop();
                for (auto &bus : stopToBus[currStop])
                {
                    if (visited[bus])
                        continue;
                    visited[bus] = true;
                    for (auto &stop : routes[bus])
                    {
                        if (stop == target)
                            return level;
                        q.push(stop);
                    }
                }
            }
        }
        return -1;
    }
};