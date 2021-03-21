// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) => {
  if (s.length != t.length) {
    return false;
  }
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] = hash[s[i]] + 1;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (t[j] in hash) {
      hash[t[j]] = hash[t[j]] - 1;
    } else {
      return false;
    }
  }

  let x = Object.values(hash).reduce((val, acc) => {
    return acc + val;
  });

  return x === 0 ? true : false;
};

console.log(validAnagram("anagram", "nagaram"));
