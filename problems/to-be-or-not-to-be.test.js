const expect = require("./to-be-or-not-to-be");

test("Expect 5 to be 5", () => {
  expect(expect(5).toBe(5));
});

test("Expect 5 NOT TO BE 4", () => {
  expect(expect(5).notToBe(4));
});
