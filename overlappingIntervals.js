// Given a set of time intervals in any order, merge all overlapping intervals into one and output
// the result which should have only mutually exclusive intervals. Let the intervals be represented as pairs of integers for simplicity.

// For example, let the given set of intervals be {{1,3}, {2,4}, {5,7}, {6,8} }.
// The intervals {1,3} and {2,4} overlap with each other, so they should be merged and become {1, 4}.
// Similarly {5, 7} and {6, 8} should be merged and become {5, 8}

function overlappingIntervals(interval) {
  let newInterval = [];

  newInterval[0] = interval[0];

  for (let i = 1; i < interval.length; i++) {
    console.log(i);
    console.log(newInterval);
    if (interval[i][0] <= newInterval[newInterval.length - 1][1]) {
      newInterval[newInterval.length - 1] = [
        newInterval[newInterval.length - 1][0],
        interval[i][1],
      ];
    } else {
      newInterval.push(interval[i]);
    }
  }

  return newInterval;
}

console.log(
  overlappingIntervals([
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8],
    [7, 12],
    [14, 18],
    [18, 18],
    [20, 22],
  ])
);
