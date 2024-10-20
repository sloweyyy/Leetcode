/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
  let stack = [];
  
  for (let c of expression) {
    if (c == ")") {
      let seen = new Set();
      while (stack[stack.length - 1] != "(") {
        seen.add(stack.pop());
      }
      stack.pop(); 
      let operator = stack.pop();
      if (operator == "&") {
        stack.push(parse_and(seen));
      } else if (operator == "|") {
        stack.push(parse_or(seen));
      } else {
        stack.push(parse_not(seen));
      }
    } else if (c != ",") {
      stack.push(c == "t" ? true : c == "f" ? false : c);
    }
  }
  return stack[0];
};

function parse_and(seen) {
  return !seen.has(false);
}

function parse_or(seen) {
  return seen.has(true);
}

function parse_not(seen) {
  return !seen.has(true);
}