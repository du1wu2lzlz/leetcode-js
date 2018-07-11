/**
 * 题目:https://leetcode-cn.com/problems/length-of-last-word/description/
 * @param {string} s
 * @return {number}
 */

 //使用trim()和正则对字符串进行改变,转化为数组后，倒叙遍历

var lengthOfLastWord = function(s) {
    var lengthOfLastWord = function (s) {
        //去掉头尾空格
        s = s.trim();
        //去掉中间的空格符
        var _str = s.replace(/\s/g, '');
        if (!_str.length) return 0;
        //从后往前循环
        for (var i = s.length; i--;) {
            //找到最后一个空格
            if (s[i] === ' ')
                return s.length - i - 1;
            //没有空格，整个就是一个单词
            if (i === 0)
                return s.length - i;
        }
    };
    
    //测试
    var s1 = "Hello World";
    var s2 = "Hello World m";
    var s3 = "Hello World  ";
    var s4 = "  n  ";
    console.log(lengthOfLastWord(s1));
    console.log(lengthOfLastWord(s2));
    console.log(lengthOfLastWord(s3));
    console.log(lengthOfLastWord(s4));
}