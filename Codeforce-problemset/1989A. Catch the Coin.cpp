#include <iostream>
#include <vector>
#include <set>
#include <cmath>

using namespace std;

int main()
{
    int n;
    cin >> n;

    vector<pair<int, int>> coins(n);
    for (int i = 0; i < n; i++)
    {
        cin >> coins[i].first >> coins[i].second;
    }

    set<pair<int, int>> reachable;
    for (int i = 0; i < n; i++)
    {
        int x = coins[i].first;
        int y = coins[i].second;

        reachable.insert({x, y});
        reachable.insert({x + 1, y});
        reachable.insert({x - 1, y});
        reachable.insert({x, y + 1});
        reachable.insert({x, y - 1});
        reachable.insert({x + 1, y + 1});
        reachable.insert({x - 1, y - 1});
        reachable.insert({x + 1, y - 1});
        reachable.insert({x - 1, y + 1});
    }

    for (int i = 0; i < n; i++)
    {
        int x = coins[i].first;
        int y = coins[i].second;

        if (reachable.count({x, y}) > 0)
        {
            cout << "YES" << endl;
        }
        else
        {
            cout << "NO" << endl;
        }
    }

    return 0;
}