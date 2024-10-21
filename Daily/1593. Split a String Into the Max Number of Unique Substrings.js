/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let max = 0;
  let seen = new Set();
  
  function dfs(start) {
    if (start == s.length) {
      max = Math.max(max, seen.size);
      return;
    }
    
    for (let i = start + 1; i <= s.length; i++) {
      let sub = s.substring(start, i);
      if (!seen.has(sub)) {
        seen.add(sub);
        dfs(i);
        seen.delete(sub);
      }
    }
  }
  
  dfs(0);
  return max;
};

