const { isPalindrome } = require("./app");

test("Palindrome Number (=true)", () => {
  const actual = isPalindrome(121);
  expect(actual).toBe(true);
});

test("Palindrome Number (=false)", () => {
  const actual = isPalindrome(-121);
  expect(actual).toBe(false);
});

test("Palindrome Number (=false)", () => {
  const actual = isPalindrome(10);
  expect(actual).toBe(false);
});
