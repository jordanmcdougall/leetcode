"use strict";
exports.__esModule = true;
exports.lengthOfLongestSubstring = void 0;
var lengthOfLongestSubstring = function (s) {
    var arr = s.split("");
    var ans = 0;
    var obj = {};
    var i = 0;
    for (var j = 0; j <= arr.length - 1; j++) {
        if (obj[arr[j]]) {
            i = Math.max(obj[arr[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        obj[arr[j]] = j + 1;
    }
    return ans;
};
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
