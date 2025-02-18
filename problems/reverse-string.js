/**
 * ### Problem: 344. Reverse String
 * **Difficulty:** Easy
 * **Category:** Two Pointers, In-Place Array Manipulation
 *
 * ---
 *
 * ### Problem Statement
 * TODO: Reverse an array of characters **in-place** (`O(1)` extra memory)
 *
 * ---
 *
 * ### Example Usage:
 * ```js
 * let s = ["h","e","l","l","o"];
 * reverseString(s);
 * console.log(s); // ["o","l","l","e","h"]
 * ```
 *
 * ---
 *
 * ### Solution Approach
 * - [Step 1: Explain your thought process]
 * - [Step 2: Describe any optimizations]
 * - [Step 3: Explain edge cases considered]
 */

function reverseString(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    // SWAP ELEMENTS USING DESTRUCTURING

    [s[left], s[right]] = [s[right], s[left]];

    // move pointers

    left++;
    right--;
  }

  // Write your solution here
}

// ✅ Example Usage
let s1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(s1);
console.log(s1);

module.exports = reverseString;
