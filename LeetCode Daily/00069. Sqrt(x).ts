function mySqrt(x: number): number {
    let l = 0;
    let r = x;
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (m * m < x) l = m + 1;
        else r = m;
    }
    return l * l === x ? l : l - 1;
}
