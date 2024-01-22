// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.
// Return an array of indices representing the words that contain the character x.
// Note that the returned array may be in any order.

// Example 1:

let words = ["leet", "code"];
let x = "e";
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

const findWordsContaining = (words, x) => {
  let res = [];
  for (idx in words) {
    if (words[idx].includes(x)) {
      res.push(idx);
    }
  }
  return res;
};

findWordsContaining(words, x);
