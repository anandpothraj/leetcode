// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length-1; i>=0; i--){
        let add = digits[i]+carry;
        if(add > 9){
            digits[i] = 0;
            carry = 1;
        }
        else{
            digits[i] = add;
            carry = 0;
            break;
        }
    }
    if(carry){
        digits.unshift(carry);
    }
    return digits;
};

console.log(plusOne([9]))                                      // [1,0]
console.log(plusOne([1,2,3]))                                  // [1,2,4]
console.log(plusOne([4,3,2,1]))                                // [4,3,2,2]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))  // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]