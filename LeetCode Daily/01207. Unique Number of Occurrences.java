class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i : arr) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        Set<Integer> set = new HashSet<>();
        for(int i : map.values()) {
            if(set.contains(i)) {
                return false;
            }
            set.add(i);
        }
        return true;       
    }
}