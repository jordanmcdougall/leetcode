const { lengthOfLongestSubstring } = require("./app");

test("Returns length of longest substring (=7)", () => {
  const actual = lengthOfLongestSubstring("abcdeafbdgcbb");
  expect(actual).toBe(7);
});

test("Returns length of longest substring (=3)", () => {
  const actual = lengthOfLongestSubstring("abcabcbb");
  expect(actual).toBe(3);
});

test("Returns length of longest substring (=1)", () => {
  const actual = lengthOfLongestSubstring("bbbbb");
  expect(actual).toBe(1);
});

test("Returns length of longest substring (=3)", () => {
  const actual = lengthOfLongestSubstring("pwwkew");
  expect(actual).toBe(3);
});
