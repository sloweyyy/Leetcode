#include <iostream>
#include <vector>
#include <map>

using namespace std;

int main()
{
    int n, m, q;
    cin >> n >> m >> q;

    vector<vector<int>> matrix(n, vector<int>(m, 0));
    map<pair<int, int>, char> restrictions;

    for (int i = 0; i < q; i++)
    {
        int xi, yi;
        char ci;
        cin >> xi >> yi >> ci;
        restrictions[{xi, yi}] = ci;
    }

    vector<int> rowCost(n, 0);
    vector<int> colCost(m, 0);
    int totalCost = 0;

    for (auto restriction : restrictions)
    {
        int xi = restriction.first.first;
        int yi = restriction.first.second;
        char ci = restriction.second;

        if (ci == 'R')
        {
            rowCost[xi - 1]++;
            totalCost += m - colCost[yi - 1];
        }
        else
        {
            colCost[yi - 1]++;
            totalCost += n - rowCost[xi - 1];
        }
    }

    for (int i = 0; i < q; i++)
    {
        cout << totalCost << endl;
    }

    return 0;
}