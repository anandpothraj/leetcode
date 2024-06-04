// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let curr = head;
    let prev = null;
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]));     // [5, 4, 3, 2, 1]
console.log(reverseList([1, 2]));              // [2, 1]
console.log(reverseList([]));                  // []