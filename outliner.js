// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutliner(arr) {
  //if <0 - odd; >0 - even
  let arrType = {
    type: 0,
  };

  for (let i = 0; i < 2; i++) {
    if (arr[i] % 2 == 0) {
      arrType["type"] = arrType["type"] + 1;
    } else arrType["type"] = arrType["type"] - 1;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arrType["type"] > 0) {
      if (arr[j] % 2 != 0) {
        return arr[j];
      }
    } else {
      if (arr[j] % 2 == 0) {
        return arr[j];
      }
    }
  }
  return -1;
}

console.log(findOutliner(["21", "43", "65", "87", "101", "129", "10", "143"]));
