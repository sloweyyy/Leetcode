class AllOne {
    constructor() {
        this.d = {};
        this.op = 0;
        this.res = "";
    }

    inc(key) {
        this.op = 0;
        if (key in this.d) {
            this.d[key] += 1;
        } else {
            this.d[key] = 1;
        }
        return null;
    }

    dec(key) {
        this.op = 0;
        if (this.d[key] > 1) {
            this.d[key] -= 1;
        } else {
            delete this.d[key];
        }
        return null;
    }

    getMaxKey() {
        if (this.op === 1) {
            return this.res;
        }
        this.op = 1;
        if (Object.keys(this.d).length > 0) {
            let a = Object.values(this.d)[0];
            let b = Object.keys(this.d)[0];
            for (let i in this.d) {
                if (this.d[i] > a) {
                    a = this.d[i];
                    b = i;
                }
            }
            this.res = b;
            return b;
        }
        this.res = "";
        return "";
    }

    getMinKey() {
        if (this.op === 2) {
            return this.res;
        }
        this.op = 2;
        if (Object.keys(this.d).length > 0) {
            let a = Object.values(this.d)[0];
            let b = Object.keys(this.d)[0];
            for (let i in this.d) {
                if (this.d[i] < a) {
                    a = this.d[i];
                    b = i;
                }
            }
            this.res = b;
            return b;
        }
        this.res = "";
        return "";
    }
}
