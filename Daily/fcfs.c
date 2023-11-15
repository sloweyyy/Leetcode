#include <stdio.h>

void main() {
    int pn[10];
    int arr[10], bur[10], star[10], finish[10], tat[10], wt[10], i, n;
    int totwt = 0, tottat = 0;

    printf("Enter the number of processes:");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("Enter the Process Name, Arrival Time & Burst Time:");
        scanf("%d%d%d", &pn[i], &arr[i], &bur[i]);
    }

    // Sắp xếp các tiến trình dựa trên arrival time
    for (i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                // Hoán đổi thứ tự các thông tin về tiến trình
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                temp = bur[i];
                bur[i] = bur[j];
                bur[j] = temp;

                temp = pn[i];
                pn[i] = pn[j];
                pn[j] = temp;
            }
        }
    }

    for (i = 0; i < n; i++) {
        if (i == 0) {
            star[i] = arr[i];
            wt[i] = star[i] - arr[i];
            finish[i] = star[i] + bur[i];
            tat[i] = finish[i] - arr[i];
        } else {
            star[i] = finish[i - 1];
            wt[i] = star[i] - arr[i];
            finish[i] = star[i] + bur[i];
            tat[i] = finish[i] - arr[i];
        }
    }

    printf("\nPName Arrtime Burtime Start TAT Finish");
    for (i = 0; i < n; i++) {
        printf("\n%d\t%6d\t\t%6d\t%6d\t%6d\t%6d", pn[i], arr[i], bur[i], star[i], tat[i], finish[i]);
        totwt += wt[i];
        tottat += tat[i];
    }
}
