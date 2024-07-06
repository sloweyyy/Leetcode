class Solution {
    public int passThePillow(int n, int time) {
        int currentPerson = 1;
        boolean forward = true;

        for (int i = 1; i <= time; i++) {
            if (forward) {
                currentPerson++;
                if (currentPerson > n) {
                    currentPerson = n - 1;
                    forward = false;
                }
            } else {
                currentPerson--;
                if (currentPerson < 1) {
                    currentPerson = 2;
                    forward = true;
                }
            }
        }

        return currentPerson;
    }
}