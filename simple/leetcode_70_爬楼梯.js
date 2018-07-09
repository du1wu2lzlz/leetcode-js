/**
 * 地址:https://leetcode-cn.com/problems/climbing-stairs/description/
 * 
 * 假设你正在爬楼梯。需要 n 步你才能到达楼顶。

 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 * 注意：给定 n 是一个正整数。




 爬楼梯问题的三种解法，普通递归，尾递归，动态规划

 * @param {number} n
 * @return {number}
 */

 //普通递归解法
var climbStairs = function(n) {
    var arr =[];
    arr[1] = 1;
    arr[2] = 2;
    for(let i=3;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n]
};

//斐波那契 普通递归算法

  function climbStairs_1(n) {
    if(n<=2){
        return n
    }
    return climbStairs_1(n-1) + climbStairs_1(n-2)
};



// 动态规划(时间复杂度更低)

    function getFunction3(n) {
        if (n < 1) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        var a = 1;
        var b = 2;
        var temp = 0;
        for (var i = 3; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return temp;
    }