from collections import defaultdict
import heapq
from typing import List


class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start_node: int, end_node: int) -> float:
        graph = defaultdict(list)
        for i, (a, b) in enumerate(edges):
            graph[a].append((b, succProb[i]))
            graph[b].append((a, succProb[i]))

        pq = [(-1, start_node)]
        probs = [0] * n
        probs[start_node] = 1

        while pq:
            prob, node = heapq.heappop(pq)
            prob = -prob
            if node == end_node:
                return prob
            for neighbor, edge_prob in graph[node]:
                new_prob = prob * edge_prob
                if new_prob > probs[neighbor]:
                    probs[neighbor] = new_prob
                    heapq.heappush(pq, (-new_prob, neighbor))

        return 0


# test
n = 3
edges = [[0, 1], [1, 2], [0, 2]]
succProb = [0.5, 0.5, 0.2]
start_node = 0
end_node = 2
print(Solution().maxProbability(
    n, edges, succProb, start_node, end_node))
