// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    let prev = null;
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    let left = head;
    let right = prev;
    while(right){
        if(left.val !== right.val){
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
};

console.log(isPalindrome([1,2,2,1]));     // true
console.log(isPalindrome([1,2]));         // false