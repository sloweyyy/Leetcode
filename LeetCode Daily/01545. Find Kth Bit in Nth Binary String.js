/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    let s = "0";
    for (let i = 1; i < n; i++) {
        s =
            s +
            "1" +
            s
                .split("")
                .map((c) => (c == "0" ? "1" : "0"))
                .reverse()
                .join("");
    }
    return s[k - 1];
};
