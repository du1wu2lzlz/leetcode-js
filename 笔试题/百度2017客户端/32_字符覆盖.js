// 小度有一个小写字母组成的字符串s.字符串s已经被写在墙上了.
// 小度还有很多卡片,每个卡片上有一个小写字母,组成一个字符串t。小度可以选择字符串t中任意一个字符,
// 然后覆盖在字符串s的一个字符之上。小度想知道在选取一些卡片覆盖s的一些字符之后,可以得到的字典序最大的字符串是什么。 
// 输入描述:
// 输入包括两行,第一行一个字符串s,字符串s长度length(1 ≤ length ≤ 50),s中每个字符都是小写字母
// 第二行一个字符串t,字符串t长度length(1 ≤ length ≤ 50),t中每个字符都是小写字母


// 输出描述:
// 输出一个字符串,即可以得到的字典序最大字符串

// 输入例子1:
// fedcba
// ee

// 输出例子1:
// feeeba

var readline = require('readline');
var s = parseInt(readline());
var t = readline().split(' ');

function compire(n,m){
    var font = n.split('');
    var last = m.split('');
    var count = 0;
    if(font.length> last.length){
        for(let i=0;i<last.length;i++){
            for(let j=0;j<font.length;j++){
                if(last[i]>font[j]){
                    font[j] = last[i];
                    count++;
                    if(count == last.length){
                        return font.join('')
                    }
                }
            }
        }
    }
    return font.join('')
}

console.log(compire(s,t));

console.log(compire('fedcba','ee'));//feeeba
console.log(compire('abb','c'));//cbb


var readline = require('readline');
var s = readline();
var t = readline();
function getMaxString(str1, str2) { 
    var temp = 0; 
    var arr = str2.split("");
    arr.sort(); 
    arr.reverse();
    for (var i = 0; i < str1.length; i++) {        
        if (arr[temp] > str1[i]) {            
            str1 = str1.substr(0, i) + arr[temp] + str1.substr(i + 1);            
            temp++;            
            if (temp === arr.length) {                
                return str1;            
            }        
        }    
    }    
    return str1;
} 
console.log(getMaxString(s, t));