// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false;
    }
    let stack = [];
    for(let i=0; i<s.length;i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{" ){
            stack.push(s[i]);
        } 
        else{
            let openBracket = stack.pop();
            if( 
                (s[i] === ")" && openBracket !== "(") ||
                (s[i] === "]" && openBracket !== "[") ||
                (s[i] === "}" && openBracket !== "{")
            ){
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()"));           // true
console.log(isValid("()[]{}"));       // true
console.log(isValid("(]"));           // false
console.log(isValid("(])"));          // false