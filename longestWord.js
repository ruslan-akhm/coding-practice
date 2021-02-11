// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//If there are two or more words that are the same length, return the first word from the string with that length.
//Ignore punctuation and assume sen will not be empty.

// Examples
// Input: "fun&!! time"
// Output: time
//
// Input: "I love dogs"
// Output: love

function longestWord(sen) {
  if (sen.length === 0) {
    return null;
  }
  let arrOfWords = sen.replace(/[^\w\s]/g, "").split(" ");
  let longest = "";
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > longest.length) {
      longest = arrOfWords[i];
    }
  }
  return longest;
}

console.log(longestWord("Argument%^& goes here)(*&^) whatsoever"));
