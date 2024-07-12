#include <bits/stdc++.h>
using namespace std;
#define int long long
#define pb push_back
#define ff first
#define ss second
#define pii pair<int, int>
#define vi vector<int>
#define vii vector<pair<int, int>>

signed main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        vector<vi> val(3, vector<int>(n + 1));
        vector<vi> pf(3, vector<int>(n + 1));

        for (int i = 0; i < 3; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                cin >> val[i][j];
                pf[i][j] = pf[i][j - 1] + val[i][j];
            }
        }

        bool ok = 0;
        vi perm = {0, 1, 2};
        int comp = (pf[perm[0]][n] + 2) / 3;
        for (int i = 0; i < 6; i++)
        {
            int cur = 1;
            while (cur <= n && pf[perm[0]][cur] < comp)
                cur++;
            for (int j = cur + 1; j < n; j++)
            {
                if (pf[perm[1]][j] - pf[perm[1]][cur] >= comp && pf[perm[2]][n] - pf[perm[2]][j] >= comp)
                {
                    vii ans(3);

                    ans[perm[0]] = {1, cur};
                    ans[perm[1]] = {cur + 1, j};
                    ans[perm[2]] = {j + 1, n};

                    for (auto x : ans)
                        cout << x.ff << ' ' << x.ss << ' ';
                    cout << '\n';
                    ok = 1;
                    break;
                }
            }
            if (ok)
                break;
            next_permutation(perm.begin(), perm.end());
        }

        if (!ok)
            cout << -1 << '\n';
    }
    return 0;
}