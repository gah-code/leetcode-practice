const reverseString = require("./reverse-string");

test("Reverse ['h', 'e', 'l', 'l', 'o']", () => {
  const s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  expect(s).toEqual(["o", "l", "l", "e", "h"]);
});
