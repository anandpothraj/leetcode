// 70. Climbing Stairs 

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
    let noOfWays = [ 1, 2 ];
    for(let i = 2; i <= n; i++){
        noOfWays[i] = noOfWays[i-2] + noOfWays[i-1];
    }
    return noOfWays[n-1];
};

console.log(climbStairs(1));   // 1
console.log(climbStairs(2));   // 2
console.log(climbStairs(3));   // 3
console.log(climbStairs(4));   // 5
console.log(climbStairs(5));   // 8
console.log(climbStairs(6));   // 13