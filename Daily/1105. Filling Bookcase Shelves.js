/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    let dp = new Array(books.length + 1).fill(0);
    for (let i = 1; i <= books.length; i++) {
        let width = books[i - 1][0];
        let height = books[i - 1][1];
        dp[i] = dp[i - 1] + height;
        for (
            let j = i - 1;
            j > 0 && width + books[j - 1][0] <= shelfWidth;
            j--
        ) {
            height = Math.max(height, books[j - 1][1]);
            width += books[j - 1][0];
            dp[i] = Math.min(dp[i], dp[j - 1] + height);
        }
    }
    return dp[books.length];
};
