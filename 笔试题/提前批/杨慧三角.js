/* 
     1
    1 1
   1 2 1
  1 3 3 1
输入 n ,输出数组
假设输入3,输出数组[[1],[1,1],[1,2,1]]
*/ 

function yanghui(m,n) {
    if(n == 0){  
        return 1     //每行第一个数为1
    }else if(m == n){
        return 1     //每行最后一个数为1
    }else{
      return  yanghui(m-1,n-1) + yanghui(m-1,n);
    }
}

function test(n){
  //n为行数
  var result = [];
  for(var i=0;i<n;i++){
    for(var j=0;j<=i;j++){
        result.push(yanghui(i,j));
    }
  }
  return result
}

test(4);