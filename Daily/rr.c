#include <stdio.h>

#define MAX 100

typedef struct
{
    int name;
    int burstTime;
    int remainingTime;
} Process;

int main()
{
    Process proc[MAX];
    int n, quantum;
    int currentTime = 0;
    float totalWaitingTime = 0, totalTurnaroundTime = 0;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    printf("Enter the quantum time: ");
    scanf("%d", &quantum);

    for (int i = 0; i < n; i++)
    {
        printf("Enter the Process Name and Burst Time for process %d: ", i + 1);
        scanf("%d %d", &proc[i].name, &proc[i].burstTime);
        proc[i].remainingTime = proc[i].burstTime;
    }

    printf("\nGantt Chart:\n");

    int completedProcesses = 0;

    while (completedProcesses < n)
    {
        for (int i = 0; i < n; i++)
        {
            if (proc[i].remainingTime > 0)
            {
                int executionTime = (proc[i].remainingTime < quantum) ? proc[i].remainingTime : quantum;
                printf("P%d\t%d\t%d\n", proc[i].name, currentTime, currentTime + executionTime);

                currentTime += executionTime;
                proc[i].remainingTime -= executionTime;

                if (proc[i].remainingTime == 0)
                {
                    completedProcesses++;
                    totalWaitingTime += currentTime - proc[i].burstTime;
                    totalTurnaroundTime += currentTime;
                }
            }
        }
    }

    printf("\nAverage Waiting Time: %.2f", totalWaitingTime / n);
    printf("\nAverage Turnaround Time: %.2f\n", totalTurnaroundTime / n);

    return 0;
}
