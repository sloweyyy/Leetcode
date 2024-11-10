/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
  let n = times.length;
  
  let arrivals = [];
  for (let i = 0; i < n; i++) {
      arrivals.push([times[i][0], i]);
  }
  
  arrivals.sort((a, b) => a[0] - b[0]);
  
  let availableChairs = new MinPriorityQueue({priority: x => x});
  for (let i = 0; i < n; i++) {
      availableChairs.enqueue(i);
  }

  let leavingQueue = new MinPriorityQueue({priority: x => x[0]});
  
  for (let [arrivalTime, friendIndex] of arrivals) {
      while (!leavingQueue.isEmpty() && leavingQueue.front().element[0] <= arrivalTime) {
          availableChairs.enqueue(leavingQueue.dequeue().element[1]);
      }
      
      let chair = availableChairs.dequeue().element;
      
      if (friendIndex === targetFriend) {
          return chair;
      }
      
      leavingQueue.enqueue([times[friendIndex][1], chair]);
  }
  
  return -1;
};