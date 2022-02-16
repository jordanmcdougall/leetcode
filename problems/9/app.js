"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
var isPalindrome = function (x) { return x.toString() == x.toString().split("").reverse().join(""); };
exports.isPalindrome = isPalindrome;
