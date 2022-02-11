export const lengthOfLongestSubstring = (s: string): number => {
    let arr: string[] = s.split("");
    let ans: number = 0;
    let obj: object = {};
    let i: number = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
        if (obj[arr[j]]) {
            i = Math.max(obj[arr[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        obj[arr[j]] = j + 1;
    }
    return ans;
};