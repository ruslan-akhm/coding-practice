//given target and wordBank, return numnber of ways the target can be constructed with elements from wordBank

//you may reuse wordBank elements as many times as you want

//example
//target = "abcde", wordBank = ['a', 'bc', 'cde', 'c', 'de']  -  1

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWays;
    }
  }
  memo[target] = totalCount;
  return totalCount;
};

console.log(countConstruct("abcde", ["a", "bc", "cde", "c", "de"]));

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
);
