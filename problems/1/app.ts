export const twoSum = (nums: number[], target: number): number[] => {

    let map = new Map()

    // create a new map with key as number and value as index
    for (let n in nums) {
        map.set(nums[n], n);
    }

    //loop through nums array
    for (let i: number = 0; i <= nums.length; i++) {
        // check if the target minus the current number exists as a key
        if (map.has(target - nums[i]) && i != map.get(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
    }
};