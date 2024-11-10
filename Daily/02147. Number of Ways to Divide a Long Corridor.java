class Solution {
    private final int modulo = 1000000007;

    public int numberOfWays(String corridor) {
        int seatCount = countSeats(corridor);
        if (seatCount < 2 || seatCount % 2 != 0)
            return 0;
        int[][] memo = new int[corridor.length()][3];
        for (int[] row : memo)
            Arrays.fill(row, -1);
        return slv(0, 0, seatCount, corridor, memo);
    }

    private int slv(int n, int currSeats, int target, String corridor, int[][] memo) {
        if (n == corridor.length() - 1)
            return 1;
        target -= addSeat(n, corridor);
        currSeats += addSeat(n, corridor);
        if (target == 0)
            return 1;
        if (currSeats > 2)
            return 0;
        if (memo[n][currSeats] != -1)
            return memo[n][currSeats];
        if (currSeats == 2) {
            memo[n][currSeats] = (slv(n + 1, 0, target, corridor, memo) % modulo) +
                    (slv(n + 1, currSeats, target, corridor, memo) % modulo);
        } else {
            memo[n][currSeats] = slv(n + 1, currSeats, target, corridor, memo);
        }
        return memo[n][currSeats] % modulo;
    }

    private int addSeat(int n, String corridor) {
        return corridor.charAt(n) == 'S' ? 1 : 0;
    }

    private int countSeats(String corridor) {
        int seatCount = 0;
        for (char c : corridor.toCharArray())
            if (c == 'S')
                seatCount++;
        return seatCount;
    }
}