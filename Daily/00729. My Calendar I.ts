class MyCalendar {
    private events: [number, number][];

    constructor() {
        this.events = [];
    }

    book(start: number, end: number): boolean {
        for (const [s, e] of this.events) {
            if (start < e && end > s) {
                return false;
            }
        }
        this.events.push([start, end]);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
