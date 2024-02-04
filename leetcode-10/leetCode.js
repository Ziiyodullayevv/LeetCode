// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// variant 1:
var reversePrefix = function (word, ch) {
  let chIdx = null;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      chIdx = i;
      break;
    }
  }

  if (!(chIdx === null)) {
    let firstStr = word
      .slice(0, chIdx + 1)
      .split("")
      .reverse()
      .join("");
    let secondStr = word.slice(chIdx + 1);
    return firstStr + secondStr;
  } else {
    return word;
  }
};

// variant 2:
var reversePrefix = function (word, ch) {
  let ss = word.split("");
  let left = 0;
  let right = 0;

  while (ss[right] !== ch && right < word.length) {
    right++;

    if (right === word.length) {
      return word;
    }
  }

  while (left < right) {
    let temp = ss[left];
    ss[left] = ss[right];
    ss[right] = temp;
    right--;
    left++;
  }

  return ss.join("");
};
