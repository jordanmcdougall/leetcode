const { romanToInt } = require("./app");

test("Roman to Integer (=3)", () => {
  const actual = romanToInt("III");
  expect(actual).toStrictEqual(3);
});

test("Roman to Integer (=58)", () => {
  const actual = romanToInt("LVIII");
  expect(actual).toStrictEqual(58);
});

test("Roman to Integer (=1994)", () => {
  const actual = romanToInt("MCMXCIV");
  expect(actual).toStrictEqual(1994);
});

test("Roman to Integer (=1024)", () => {
  const actual = romanToInt("MXXIV");
  expect(actual).toStrictEqual(1024);
});

test("Roman to Integer (=154)", () => {
  const actual = romanToInt("CLIV");
  expect(actual).toStrictEqual(154);
});

test("Roman to Integer (=1476)", () => {
  const actual = romanToInt("MCDLXXVI");
  expect(actual).toStrictEqual(1476);
});
