//Given an array and value, find if there are 2 numbers in array which would in sum give the value
//e.g. array = [1,4,5,3,-2], value = 7; 4 and 3 would sum up to 7

const findAddendums = (arr, val) => {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let secondAddendum = val - arr[i];
    if (hashTable[arr[i]]) {
      return [arr[i], secondAddendum];
    } else {
      hashTable[secondAddendum] = true;
    }
  }
};

console.log(findAddendums([1, 4, 5, 3, -2], 7));
