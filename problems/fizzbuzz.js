/**
 * ### Problem: 412. Fizz Buzz
 * **Difficulty:** Easy
 * **Category:** Loops, Conditionals, String Manipulation
 *
 * ---
 *
 * ### Problem Statement
 * Given an interger `n`, return an array from `1` to `n`:
 * - Multiples of 3 -> "Fizz"
 * - Multiples of 5 -> "Buzz"
 * - Multiples of 3 & 5 -> "FizzBuzz"
 * - Otherwise -> Number as a string
 * ---
 *
 *
 * ### Constraints:
 * - `1 <= n <= 10⁴`
 *
 * ---
 * ### Example Usage:
 * ```js
 * fizzBuzz(5);
 * ```
 * **Output:**
 * ```js
 * ["1", "2", "Fizz", "4", "Buzz"]
 * ```
 *
 * ---
 *
 * ### Solution Approach
 * - Step 1: Use a loop to iterate from 1 to n (`O(n))
 * - Step 2: Use string concatenation to eliminate redundant condition
 */

var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str = '';

    if (i % 3 === 0) str += 'Fizz';
    if (i % 5 === 0) str += 'Buzz';
    if (str === '') str = i.toString();

    result.push(str);
  }

  return result;
};

// Example usage
console.log(fizzBuzz(15));

module.exports = fizzBuzz;
