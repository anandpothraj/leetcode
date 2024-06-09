// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    head = slow;
    return head;
};

console.log(middleNode([1,2,3,4,5]));       // [3,4,5]
console.log(middleNode([1,2,3,4,5,6]));     // [4,5,6]