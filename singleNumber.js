// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

const singleNumber = arr => {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]] = hashTable[arr[i]] + 1;
    } else {
      hashTable[arr[i]] = 1;
    }
  }

  let entries = Object.entries(hashTable).filter(entry => {
    return entry[1] == 1;
  });

  return entries[0][0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
