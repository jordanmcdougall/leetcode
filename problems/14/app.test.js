const { longestCommonPrefix } = require("./app");

test("Longest Common Prefix (=fl)", () => {
  const actual = longestCommonPrefix(["flower", "flow", "flight"]);
  expect(actual).toStrictEqual("fl");
});

test("Longest Common Prefix (='')", () => {
  const actual = longestCommonPrefix(["dog", "racecar", "car"]);
  expect(actual).toStrictEqual("");
});
