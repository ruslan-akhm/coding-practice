// You are given a sorted array of N integers from 1 to N with one number missing.
// For example, you are given {1, 3, 4, 5}, and N = 5, the missing number is 2. Find the missing number.
// {1, 3, 4, 5, 6}
// {1, 2, 3, 4, 5}
// middle = 2
// arr[middle] = 3 (or 4)

function fingMissing(arr) {
  //find middle of array
  let middle = Math.floor(arr.length / 2);
  //missing number is on the left
  if (middle + 1 < arr[middle]) {
    for (let i = 0; i < middle; i++) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i] - 1;
      }
    }
  }
  //missing number is on the right
  if (middle + 1 >= arr[middle]) {
    for (let i = middle; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i] - 1;
      }
    }
  }
}

// {1, 3, 4, 5, 6}

function binaryFindMissing(arr) {
  let lower = 0;
  let upper = arr.length - 1;

  if (arr[upper] === upper + 1 || arr.length === 1 || arr.length === 0) {
    return -1;
  }

  while (lower <= upper) {
    let middle = lower + Math.floor((upper - lower) / 2);
    if (arr[middle] - arr[middle - 1] > 1) {
      //missing value immediately on the left
      return arr[middle] - 1;
    }
    if (arr[middle + 1] - arr[middle] > 1) {
      //missing value immediately on the right
      return arr[middle] + 1;
    }

    if (middle + 1 < arr[middle]) {
      //missing number somewhere on the right
      upper = middle;
    } else {
      lower = middle;
    }
  }
}

console.log(binaryFindMissing([1, 2, 3, 4, 5, 7]));
