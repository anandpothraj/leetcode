// 190. Reverse Bits
// Reverse bits of a given 32 bits unsigned integer.

var reverseBits = function(n) {
    var result = 0;
    var count = 32;
    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};

console.log(reverseBits("00000010100101000001111010011100"));   // 964176192
console.log(reverseBits("11111111111111111111111111111101"));   // 3221225471