/**
 * 请用JavaScript实现一个normailize函数,能将输入的特定的字符串转化为特定的数据结构，满足一下测试用例
 * 字符串仅由小写字母和[,]组成,且字符串不会包含多余的空格
 * 示例1: 'abc' --> {value: 'abc'}
 * 示例2: '[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', chiledren: {value: 'def'}}}
 */

 function normalize(str) {
     var obj = {};
     var index = str.indexOf('[');
     if(index == -1){
         obj.value = str;
     }
     else{
       var arr = str.split('[');
       var count = arr.length;
       count--;
       var stack = [];
       for(let i=count;i>0;i--){
           if(i == count){
               stack.push({value: arr[i].split(']')[0]});
           }
           else{
               var pop = stack.pop();
               stack.push({value: arr[i], children: pop});
           }
       }
       obj = stack[0];
     }
    return obj;
 }

 //test
 var str = 'abc';
 var str1 = '[abc[bcd[def]]]';
 console.log(normalize(str1));