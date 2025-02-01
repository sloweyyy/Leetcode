import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int[] restoreArray(int[][] adjacentPairs) {
        int[] result = new int[adjacentPairs.length + 1];
        Map<Integer, List<Integer>> map = new HashMap<>();
        for (int[] pair : adjacentPairs) {
            map.putIfAbsent(pair[0], new ArrayList<>());
            map.putIfAbsent(pair[1], new ArrayList<>());
            map.get(pair[0]).add(pair[1]);
            map.get(pair[1]).add(pair[0]);
        }
        for (Map.Entry<Integer, List<Integer>> entry : map.entrySet()) {
            if (entry.getValue().size() == 1) {
                result[0] = entry.getKey();
                break;
            }
        }
        result[1] = map.get(result[0]).get(0);
        for (int i = 2; i < result.length; i++) {
            List<Integer> list = map.get(result[i - 1]);
            result[i] = result[i - 2] == list.get(0) ? list.get(1) : list.get(0);
        }
        return result;
    }
}