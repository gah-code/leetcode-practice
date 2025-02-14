const fetchWithRetry = require("./fetch-with-retry");

test("Successful API call", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ id: 1, title: "Test Todo" }),
    })
  );

  const data = await fetchWithRetry(
    "https://jsonplaceholder.typicode.com/todos/1",
    3
  );
  expect(data).toEqual({ id: 1, title: "Test Todo" });
});

test("Fail all retries", async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));

  const data = await fetchWithRetry("https://example.com", 2);
  expect(data).toBe("Fetch failed");
});
