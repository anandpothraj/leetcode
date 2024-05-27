// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

var reverseVowels = function(s) {
    let left = 0;
    s = s.split('');
    let right = s.length - 1;
    let vowels = { 'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1, 'u' : 1, 'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1 };
    while( left < right ){
        if(vowels[s[left]] && vowels[s[right]]){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
        else if(vowels[s[left]]){
            right--;
        }
        else{
            left++;
        }
    }
    return s.join('');
};

console.log(reverseVowels("hello"));           //  "holle"
console.log(reverseVowels("leetcode"));        //  "leotcede"