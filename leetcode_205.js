// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function(s, t) {
    let mapST = {}, mapTS = {};
    for (let i = 0; i < s.length; i++) {
        let c1 = s[i], c2 = t[i];
        if ((c1 in mapST && mapST[c1] !== c2) || (c2 in mapTS && mapTS[c2] !== c1)) {
            return false;
        }
        mapST[c1] = c2;
        mapTS[c2] = c1;
    }
    return true;
};

console.log(isIsomorphic("foo", "bar"));        // false
console.log(isIsomorphic("egg", "add"));        // true
console.log(isIsomorphic("paper", "title"));    // true