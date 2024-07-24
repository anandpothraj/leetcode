// 191. Number of 1 Bits

// Write a function that takes the binary representation of a positive integer and returns the number of 
// set bits it has (also known as the Hamming weight).

var hammingWeight = function(n) {
    let res = 0;
    for(let i=0; i<32; i++){
        if((n >> i) & 1){
            res+= 1;
        }
    }
    return res;
};

console.log(hammingWeight(11));              // 3
console.log(hammingWeight(128));             // 1
console.log(hammingWeight(2147483645));      // 30