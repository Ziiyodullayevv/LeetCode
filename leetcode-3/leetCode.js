// 2418. Sort the People

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

// variant 1:
var sortPeople1 = function (names, heights) {
  let res = [];

  for (let i = 0; i < names.length; i++) {
    res.push([names[i], heights[i]]);
  }
  res.sort((a, b) => b[1] - a[1]);
  return res.map((item) => item[0]);
};

// variant 2: (optimal)
var sortPeople2 = function (names, heights) {
  return names
    .map((name, i) => ({ name, height: heights[i] }))
    .sort((a, b) => b.height - a.height)
    .map((obj) => obj.name);
};
