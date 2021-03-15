//Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.
//For example, "()[]{}" is valid but "(]" is not.

const validParentheses = str => {
  let stack = [];
  let mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let c of str) {
    if (mapping[c]) {
      if (stack.length === 0) return false;
      if (mapping[c] !== stack.pop()) return false;
    } else {
      stack.push(c);
    }
  }
  return true;
};

console.log(validParentheses("()]{}"));
