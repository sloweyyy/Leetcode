class MyCalendarTwo {
    private bookings: [number, number][];
    private doubleBookings: [number, number][];

    constructor() {
        this.bookings = [];
        this.doubleBookings = [];
    }

    book(start: number, end: number): boolean {
        for (const [s, e] of this.doubleBookings) {
            if (start < e && end > s) {
                return false; // Triple booking detected
            }
        }

        for (const [s, e] of this.bookings) {
            if (start < e && end > s) {
                this.doubleBookings.push([Math.max(start, s), Math.min(end, e)]);
            }
        }

        this.bookings.push([start, end]);
        return true;
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */