// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

var removeElements = function(head, val) {
    let temp = new ListNode(0);
    temp.next = head;
    let curr = temp;
    while(curr.next != null){
        if(curr.next.val === val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next;
        }
    }
    return temp.next;
};


console.log(removeElements([1, 2, 3, 6, 4, 5, 6], 6));            // [1, 2, 3, 4, 5]
console.log(removeElements([], 1));                               // []
console.log(removeElements([7,7,7,7], 7));                        // []