class Solution {

/**
 * @param String $s
 * @return Integer
 */
function numDecodings($s) {
    $len = strlen($s);
    $dp = array_fill(0, $len + 1, 0);
    $dp[0] = 1;
    $dp[1] = $s[0] == '0' ? 0 : 1;
    for ($i = 2; $i <= $len; $i++) {
        $one = intval(substr($s, $i - 1, 1));
        $two = intval(substr($s, $i - 2, 2));
        if ($one >= 1 && $one <= 9) {
            $dp[$i] += $dp[$i - 1];
        }
        if ($two >= 10 && $two <= 26) {
            $dp[$i] += $dp[$i - 2];
        }
    }
    return $dp[$len];
}
}