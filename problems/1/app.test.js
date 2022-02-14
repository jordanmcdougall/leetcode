const { twoSum } = require("./app");

test("Two Sum (=[0,1])", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const actual = twoSum(nums, target);
  expect(actual).toStrictEqual([0, 1]);
});

test("Two Sum (=[1,2])", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const actual = twoSum(nums, target);
  expect(actual).toStrictEqual([1, 2]);
});

test("Two Sum (=[0,1])", () => {
  const nums = [3, 3];
  const target = 6;
  const actual = twoSum(nums, target);
  expect(actual).toStrictEqual([0, 1]);
});
