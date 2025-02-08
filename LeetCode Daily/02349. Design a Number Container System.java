
class NumberContainers {

    private Map<Integer, Integer> indexToNumber;
    private Map<Integer, TreeSet<Integer>> numberToIndices;

    public NumberContainers() {
        this.indexToNumber = new HashMap<>();
        this.numberToIndices = new HashMap<>();

    }

    public void change(int index, int number) {
        if (indexToNumber.containsKey(index)) {
            int prev = indexToNumber.get(index);
            TreeSet<Integer> set = numberToIndices.get(prev);
            set.remove(index);
        }
        indexToNumber.put(index, number);
        numberToIndices.putIfAbsent(number, new TreeSet<>());
        numberToIndices.get(number).add(index);
    }

    public int find(int number) {
        if (!numberToIndices.containsKey(number) || numberToIndices.get(number).isEmpty()) {
            return -1;
        }
        return numberToIndices.get(number).first();
    }

}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * NumberContainers obj = new NumberContainers(); obj.change(index,number); int
 * param_2 = obj.find(number);
 */
