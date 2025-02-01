
class Solution {

    public int minimizeXor(int num1, int num2) {
        // Count set bits in num2
        int targetBits = Integer.bitCount(num2);
        int result = 0;

        // Set MSB bits first if they match num1
        for (int i = 31; i >= 0 && targetBits > 0; i--) {
            if ((num1 & (1 << i)) != 0) {
                result |= (1 << i);
                targetBits--;
            }
        }

        // Fill remaining required bits from LSB
        for (int i = 0; i < 32 && targetBits > 0; i++) {
            if ((result & (1 << i)) == 0) {
                result |= (1 << i);
                targetBits--;
            }
        }

        return result;
    }
}
