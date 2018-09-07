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


// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a+b);
}


function test(a,b,c){
    var result = [];
    result.push(a,b,c);
    result.sort()

    var left = result[0]+result[1];
    var right = result[2];
    console.log(Number(left)*Number(right))
}
test(1,2,3)
test(3,3,3)


while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    var c = parseInt(lines[2]);
    
        function test(a,b,c){
        var result = [];
        result.push(a,b,c);
        result.sort()

        var left = result[0]+result[1];
        var right = result[2];
        console.log(Number(left)*Number(right))
    }
}