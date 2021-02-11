// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

function jewelsStones(jewels, stones) {
  let hashTable = {};
  let counter = 0;

  for (let i = 0; i < jewels.length; i++) {
    hashTable[jewels[i]] = true;
  }
  for (let j = 0; j < stones.length; j++) {
    if (hashTable[stones[j]]) {
      counter++;
    }
  }
  return counter;
}

console.log(jewelsStones("aACc", "aCccAAbbbb"));
