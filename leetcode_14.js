// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    if(strs === undefined || strs.length === 0){ return '' };
    return strs.reduce((prev, next) => {
        let i=0;
        while(prev[i] && next[i] && prev[i] === next[i]){
            i++;
        }
        return prev.slice(0,i);
    })
};

console.log(longestCommonPrefix(["flower","flow","flight"]));  // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));     // ""