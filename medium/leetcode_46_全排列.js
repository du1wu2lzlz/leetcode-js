/**
 * 题目: https://leetcode-cn.com/problems/permutations/description/
 * 
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
    示例:
    输入: [1,2,3]
    输出:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
 * @param {number[]} nums
 * @return {number[][]}
 */


//递归的角度: 可以分解为输出以1开头的全排，以2开头的全排...以n开头的全排

function swap(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}   

function perm(arr) {  
    (function fn(n) { //为第n个位置选择元素  n初始值为0
        for(var i=n;i<arr.length;i++) {  
            swap(arr,i,n);  
            if(n+1<arr.length-1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n+1); //从第n+1个下标进行全排列  
            else 
            debugger
               console.log(arr)//显示一组结果  
            swap(arr,i,n);  
        }   
    })(0);  
}  
perm([1,2,3,4]);  

