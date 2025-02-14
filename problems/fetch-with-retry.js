/**
 * ### Problem: Fetch API with Error Handling
 * **Difficulty:** Easy
 * **Category:** Promises & Async Handling, Fetch API
 *
 * ---
 *
 * ### Problem Statement
 * Write a function `fetchWithRetry(url, retries)` that:
 * - Fetches data from a given `url`.
 * - If the request fails due to a network error, it retries up to `retries` times.
 * - If all retries fail, it should return `"Fetch failed"`.
 *
 * ---
 *
 * ### Example Usage:
 * ```js
 * fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
 *   .then(data => console.log("Fetched Data:", data))
 *   .catch(error => console.error("Error:", error));
 * ```
 *
 * ---
 *
 * ### Solution Approach
 * - Use `fetch()` to make an API request.
 * - Handle errors with `.catch()`, retrying up to `retries` times.
 * - If all attempts fail, return `"Fetch failed"`.
 */

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed:`, error);
      if (i === retries - 1) return "Fetch failed";
    }
  }
}

// Example usage (Runs instantly with Quokka)
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then((data) => console.log("Fetched Data:", data))
  .catch((error) => console.error("Error:", error));

module.exports = fetchWithRetry;
