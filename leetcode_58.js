// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal 
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    s = s.trim();
    let lastWordIndex = 0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i] != ' '){
            lastWordIndex++;
        }
        else if(lastWordIndex>0){
            if(s[i] === " "){
                break;
            }
        }
    }
    return lastWordIndex;
};

console.log(lengthOfLastWord("a"));                              // 1
console.log(lengthOfLastWord("Hello World"));                    // 5
console.log(lengthOfLastWord("luffy is still joyboy"));          // 6
console.log(lengthOfLastWord("   fly me   to   the moon  "));    // 4