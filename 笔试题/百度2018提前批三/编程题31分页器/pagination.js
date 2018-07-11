/**
 * 分页组件是web开发中常见的组件，请完成pagination函数，在id为jsPagination的DOM元素中完成分页的显示部分，需求如下
    1、最多连续显示5页，居中高亮显示current页（如demo1所示)
    2、total为0时，隐藏整个元素（如demo2所示）
    3、如果total<=5，则显示全部页数，隐藏“首页”和“末页”元素（如demo3所示）
    4、当current居中不足5页，向后(前)补足5页，隐藏“首页”(“末页”)元素(如demo4和demo5所示)
    5、total、current均为正整数，1 <= current <= total 
 * 
 */


function pagination(total, current) {
    var ele=document.getElementById('jsPagination');
    var page = ele.children;
    var first = ele.children[0];
    var last = ele.children[ele.children.length - 1];
    //for demo1
    if(current-2>=1&&current+2<=total)
    {
        if(current-2==1)
            first.className='hide';
        for(var i=current-2,p=current-2;i<=current+2;p++,i++)
        {
            page[i].innerHTML=i;
            if(i==current)
                page[i].className='current';
        }
        if(current+2==total)
        {
            last.className='hide';
        }
    }
    //for demo2
    else if(total==0)
    {
        ele.className='pagination hide';
    }
    //for demo3
    else if(total<=5)
    {
        first.className='hide';
        for(var i=1;i<=5;i++) {
            if (i <= total) {
                page[i].innerHTML=i;
                if(i==current)
                    page[i].className='current';
            }
            else
            {
                page[i].className='hide';
            }

        }
        last.className='hide';
    }
    //for demo4
    else if(current-2<=0)
    {
        
        first.className='hide';
        for(var i=1;i<=5;i++) {
            page[i].innerHTML=i;
                if(i==current)
                    page[i].className='current';
        }

    }
    //for demo5
    else if(current+2>total)
    {
        for(var i=total-4;i<=total;i++) {
            page[i].innerHTML=i;
            if(i==current)
                page[i].className='current';
        }
        last.className='hide';
    }
}
