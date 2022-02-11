const { functionName } = require("./app");

test("Test Title", () => {
  const actual = functionName("Test Case");
  expect(actual).toBe(true);
});
