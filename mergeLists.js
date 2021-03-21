// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

//USE RECURSION TO SOLVE THIS PROBLEM

const mergeLists = (n, m, o = []) => {
  if (n.length === 0) {
    o.concat(m);
    o.sort((a, b) => {
      return a - b;
    });
    return o;
  }
  if (m.length === 0) {
    o.concat(n);
    o.sort((a, b) => {
      return a - b;
    });
    return o;
  }
  let m1 = m.splice(0, 1);
  let n1 = n.splice(0, 1);

  o = [...o, n1, m1];

  return mergeLists(n, m, o);
};

console.log(mergeLists([1, 2, 4, 7, 9], [1, 3, 4, 22, 34]));
