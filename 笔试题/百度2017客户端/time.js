// 倒计时是web开发中常见的组件，请完成second和render两个函数，完成倒计时的显示部分
// 1、second函数的输入为整数，返回{day: Int, hour: Int, min: Int, second: Int}
// 2、render函数的输入为second函数的输入，将数据在页面对应的DOM元素上显示出来，格式如html所示
// 3、如果day为0，隐藏对应的DOM元素，否则显示（请直接使用已经实现的css代码）
// 4、数值不足两位，前面补充0 
// 输入例子1:

// 输出例子1:

// 01天 02: 03: 04


function second(second) {
    var result = {};
    var input ;
    input = new Date(second*1000);
    // new Date(1000) : Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
    result.day = input.getUTCDate() -1;
    result.hour = input.getUTCHours();
    result.min =  input.getUTCMinutes();
    result.second = input.getUTCSeconds();

    return result
}

function render(data) {
    var tree = document.getElementById('jsCountdown').children;
    var day = tree[0];
    var hour = tree[1];
    var minute  = tree[2];
    var second = tree[3];
    if(data.day == '0'){
        day.className = 'hide';
    }else{
        day.innerHTML = (data.day< 10 ? ('0'+data.day) : (data.day) + '天');
    }
    hour.innerHTML = (data.hour< 10 ? ('0'+data.hour) : (data.hour) + ':');
    minute.innerHTML = (data.min< 10 ? ('0'+data.min) : (data.min) + ':' );
    second.innerHTML = (data.second< 10 ? ('0'+data.second) : (data.second) );

}

//通过率为百分之70 不知道少了啥...





{/* html && css
    <div id="jsCountdown">
        <span>01天</span>
        <span>02:</span>
        <span>03:</span>
        <span>04</span>
    </div> 


    .hide{
	    display: none;
    }
*/}
