// 796. Rotate String

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

var rotateString = function (s, goal) {
  let g = [...s];

  for (let i = 0; i < s.length; i++) {
    g.push(g.shift());
    if (g.join("") === goal) return true;
  }
  return false;
};

var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  const concatenated = s + s;
  return concatenated.includes(goal);
};
