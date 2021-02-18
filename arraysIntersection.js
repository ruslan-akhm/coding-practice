//Find the intersection of two arrays
//e.g. [2,4,6,8,9,10,12,14] and [1,3,5,7,9,11,13] will have intersection at 9

function findIntersection(arr1, arr2) {
  let intersectionPoints = {};

  for (let i = 0; i < arr1.length; i++) {
    intersectionPoints[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (intersectionPoints[arr2[j]]) {
      return arr2[j];
    }
  }

  return -1;
}

console.log(
  findIntersection([2, 4, 6, 8, 9, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])
);
