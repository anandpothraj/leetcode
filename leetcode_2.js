// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let linkList = new ListNode();
    let res = linkList;
    let total = 0, carry = 0;
    while (l1 || l2 || carry) {
        total = carry;
        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }
        let num = total % 10;
        carry = Math.floor(total / 10);
        linkList.next = new ListNode(num);
        linkList = linkList.next;
    }
    return res.next;
};

console.log(addTwoNumbers([0], [0]));                     // [7,0,8]           
console.log(addTwoNumbers([2,4,3], [5,6,4]));             // [0]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));   // [8,9,9,9,0,0,0,1] 