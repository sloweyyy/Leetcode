function minimizedMaximum(n: number, quantities: number[]): number {
    function canDistribute(k: number): boolean {
        let stores = 0;
        for (let quantity of quantities) {
            stores += Math.ceil(quantity / k);
        }
        return stores <= n;
    }

    let left = 1;
    let right = Math.max(...quantities);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canDistribute(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
