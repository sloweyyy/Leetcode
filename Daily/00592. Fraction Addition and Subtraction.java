class Solution {
    public String fractionAddition(String expression) {
        List<Character> signs = new ArrayList<>();
        if (expression.charAt(0) != '-') {
            signs.add('+');
        }
        for (int i = 0; i < expression.length(); i++) {
            if (expression.charAt(i) == '+' || expression.charAt(i) == '-') {
                signs.add(expression.charAt(i));
            }
        }
        List<Integer> numerators = new ArrayList<>();
        List<Integer> denominators = new ArrayList<>();
        for (int i = 0; i < expression.length(); i++) {
            if (expression.charAt(i) == '/') {
                int j = i - 1;
                while (j >= 0 && Character.isDigit(expression.charAt(j))) {
                    j--;
                }
                numerators.add(Integer.parseInt(expression.substring(j + 1, i)));
                j = i + 1;
                while (j < expression.length() && Character.isDigit(expression.charAt(j))) {
                    j++;
                }
                denominators.add(Integer.parseInt(expression.substring(i + 1, j)));
            }
        }
        int numerator = numerators.get(0);
        int denominator = denominators.get(0);
        for (int i = 1; i < numerators.size(); i++) {
            if (signs.get(i) == '+') {
                numerator = numerator * denominators.get(i) + numerators.get(i) * denominator;
            } else {
                numerator = numerator * denominators.get(i) - numerators.get(i) * denominator;
            }
            denominator = denominator * denominators.get(i);
        }
        int gcd = gcd(Math.abs(numerator), Math.abs(denominator));
        return (numerator / gcd) + "/" + (denominator / gcd);
    }
}
