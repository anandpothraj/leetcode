// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let result = head;
    while(head && head.next){
        if(head.val === head.next.val){
            head.next = head.next.next;
        }
        else{
            head = head.next;
        }
    }
    return result;
};

console.log(deleteDuplicates([1, 1, 2]));        // [1, 2, 3]
console.log(deleteDuplicates([1,1,2,3,3]));      // [1, 1, 2, 3, 3]