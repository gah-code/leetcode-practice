/**
 * ### Problem: 2704. To Be Or Not To Be
 * **Difficulty:** Easy
 * **Category:** Function Implementation, JavaScript Closures
 *
 * ---
 *
 * ### Problem Statement
 * Implement `expect(val)` to return an object with:
 * - `toBe(expected)`: Passes if `val === expected`, else throws `"Not Equal"`.
 * - `notToBe(expected)`: Passes if `val !== expected`, else throws `"Equal"`.
 *
 * ---
 *
 * ### Example Usage:
 * ```js
 * expect(5).toBe(5);      // ✅ Passes
 * expect(5).notToBe(4);   // ✅ Passes
 * expect(5).toBe(4);      // ❌ Throws "Not Equal"
 * expect(5).notToBe(5);   // ❌ Throws "Equal"
 * ```
 *
 * ---
 *
 * ### Solution Approach
 * - **Closures:** Return an object containing two methods.
 * - **Strict Equality (`===`)**: Ensures exact value matching.
 * - **Throw Errors**: Provides meaningful output when conditions fail.
 */

function expect(val) {
  return {
    toBe(expected) {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },

    notToBe(expected) {
      if (val === expected) {
        throw new Error("Equal");
      }

      return true;
    },
  };
  // Write your solution here
}

// Example usage
// console.log(solution());

module.exports = expect;
