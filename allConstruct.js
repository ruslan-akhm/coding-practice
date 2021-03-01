//given target and wordBank, return ALL possible ways the target can be constructed with elements from wordBank
//function should return 2D array where every element represents a valid combination

//you may reuse elements of word bank as many times as needed

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

console.log(allConstruct("purple", ["p", "ur", "le", "purp", "e"]));
