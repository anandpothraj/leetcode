// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
    let result = [];
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    console.log("a : ",a);
    console.log("b : ",b);
    for(let i = 0; i < Math.max(a.length, b.length); i += 1){
        num1 = Number(a[i] || 0);
        num2 = Number(b[i]) || 0;
        curr = Number(result[i]||0) + num1 + num2;
        console.log("result : ", result);
        console.log("index : ", i, " num1 : ",num1, " num2 : ", num2, " curr : ", curr);
        if(curr >= 2){
            result[i] = curr%2;
            result.push(1)
        }
        else{
            result[i] = curr;
        }
    }
    return result.reverse().join("");
};

console.log(addBinary("1010", "1011"));