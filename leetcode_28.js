// 28. Find the index of the first occurence in a string 
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    if(needle.length<1){
        return 0;
    }
    for (let i = 0; i < haystack.length + 1 - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));             // 2
console.log(strStr("sadbutsad","sad"));         // 0
console.log(strStr("leetcode", "leeto"));       // -1