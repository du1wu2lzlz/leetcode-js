// 对于一个正整数，我们认为它的光棍指数是它二进制表示下1的个数。
// 通常认为光棍指数越高，这个数就越孤单。那么问题来了，对于给定的[a,b]区间中。最孤单的数字是谁呢？
// 如果光棍指数相同，最孤单的就是最小的那个数。

// 输入描述:
// 第一行一个整数 T (1≤T≤10^4)，表示问题数。
// 接下来 T 行，每行两个整数 a,b (0≤a≤b≤2^31−1)。数据之间用一个空格分隔。


// 输出描述:
// 对于每个问题，输出一行 Case x: y，其中 x 是问题编号，从 1 开始，y 是答案

// 输入例子1:
// 2
// 0 14
// 100 1000

// 输出例子1:
// Case 1: 7
// Case 2: 511


 
function tranform(n,m){
   var result = [];
   for(let i=n;i<=m;i++){
        let num = i.toString(2).split(''); 
        let count = 0;
        for(let j=0;j<num.length;j++){
            if(num[j] == '1'){
                count++;
            }
        }
        result.push(count);
   }
   console.log(result.indexOf(Math.max(...result))+n);
   return result.indexOf(Math.max(...result)) 
}

tranform(0,14);
tranform(100,1000);