#include <queue>
using namespace std;

class SeatManager
{
private:
    priority_queue<int, vector<int>, greater<int>> pq; // min heap to store unreserved seats
public:
    SeatManager(int n)
    {
        for (int i = 1; i <= n; i++)
        {
            pq.push(i);
        }
    }

    int reserve()
    {
        int seatNumber = pq.top();
        pq.pop();
        return seatNumber;
    }

    void unreserve(int seatNumber)
    {
        pq.push(seatNumber);
    }
};
