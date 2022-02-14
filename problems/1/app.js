"use strict";
exports.__esModule = true;
exports.twoSum = void 0;
var twoSum = function (nums, target) {
    var map = new Map();
    // create a new map with key as number and value as index
    for (var n in nums) {
        map.set(nums[n], n);
    }
    //loop through nums array
    for (var i = 0; i <= nums.length; i++) {
        // check if the target minus the current number exists as a key
        if (map.has(target - nums[i]) && i != map.get(target - nums[i])) {
            return [i, parseInt(map.get(target - nums[i]))];
        }
    }
};
exports.twoSum = twoSum;
