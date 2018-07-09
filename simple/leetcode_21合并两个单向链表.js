/**
 * 地址:https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 //思路 把两个入参链表转化为数组，并排序，再转化为单链表
var mergeTwoLists = function(l1, l2) {
    
    var arr =[];
    //把链表l1拆开放入数组arr中
    while(l1){
        arr.push(new ListNode(l1.val));
        l1=l1.next;
    }

    //把链表l2拆开放入数组arr中
    while(l2){
        arr.push(new ListNode(l2.val));
        l2=l2.next;
    }

    //新数组排序
    arr.sort(function(a,b){
        return a.val-b.val;
    })

    if(!arr.length){
        return null;
    }
    //把排序后的节点，串起来
    for(let i=0;i<arr.length-1;i++){
        arr[i].next = arr[i+1];
    }
    //返回头节点
    return arr[0];
    
};


 //测试 1->2->4, 1->3->4
 var N3 = new ListNode(4);
 var N2 = new ListNode(2);
 N2.next = N3;
 var N1 = new ListNode(1);
 N1.next = N2;
 var N6 = new ListNode(4);
 var N5 = new ListNode(3);
 N5.next = N6;
 var N4 = new ListNode(1);
 N4.next = N5;
 console.log(mergeTwoLists(N1,N4));