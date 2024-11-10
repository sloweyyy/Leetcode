function findMinDifference(timePoints: string[]): number {
    const minutes = timePoints.map(time => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    });

    minutes.sort((a, b) => a - b);

    let minDifference = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        minDifference = Math.min(minDifference, minutes[i] - minutes[i - 1]);
    }

    minDifference = Math.min(minDifference, minutes[0] + 1440 - minutes[minutes.length - 1]);

    return minDifference;
};