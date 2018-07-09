/**
 * 地址:https://leetcode-cn.com/problems/delete-node-in-a-linked-list/description/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if(!node.next){
        return;
    }else{
        var temp = node.next;
        node.val = node.next.val;
        node.next = temp.next;
    }
};
module.exports =  deleteNode;