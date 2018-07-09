/**
 * 地址:https://leetcode-cn.com/problems/reverse-integer/description/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var sign = x >= 0 ? -1 : 1;
    x = Math.abs(x);

    var sum = 0;
    while (x!=0) {
        sum = sum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    var ret = sign * -1 * sum;
    var max = Math.pow(2, 31) - 1;
    var min = -Math.pow(2, 31);
    if (ret > max) return 0;
    if (ret < min) return 0;
    return ret;
};

var reverse_ = function (x) {
    // 1<<30左移30位，即2的30次方，再*2,就是31次方
    var minn = -(1 << 30) * 2;
    //同理2的30次方，再*2即2的31次方
    var maxn = (1 << 30) * 2 - 1;
    var ans;
    //数字转成字符串，再拆成一个个字母
    var arr = x.toString().split('');
    //负数时，去掉第一个负号
    if (x < 0)
        arr.shift(); 
    //字符数组倒序，然后拼接，转成数字可以去掉字符串开头的0
    ans = Number(arr.reverse().join(''));
    //负数最后记得*-1
    if (x < 0)
        ans *= -1;
    // console.log(minn, maxn)
    //超出方位，溢出时，返回0
    if (ans < minn || ans > maxn)
        return 0;
    else
        return ans;
};
console.log(reverse(120));
console.log(reverse(-123));