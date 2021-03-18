//Given a string s,
//find the length of the longest substring without repeating characters.

//e.g.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const longestSubstring = s => {
  if (s.length === 0) return 0;
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[i] = [s[i]];
    let unique = true;
    let j = i + 1;
    while (unique) {
      if (j >= s.length) {
        j = 0;
        unique = false;
        break;
      }
      if (hash[i].indexOf(s[j]) != -1) {
        j = 0;
        unique = false;
        break;
      } else {
        hash[i] = [...hash[i], s[j]];
        j += 1;
      }
    }
  }
  let result = Object.values(hash).map(e => {
    return e.length;
  });
  return Math.max(...result);
};

console.log(longestSubstring("abcabcbb"));
