/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {
    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    list = list.next;
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null) list.next = l1;
  if (l2 !== null) list.next = l2;

  // return .next because this first element in the linkedlist is empty
  return head.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * Node can also be created by function
 * @param {*} data 
 * @param {*} next 
 */
function Node(data, next) {
  this.data = data;
  this.next = next;
}
/**
 * This is Linked List in JavaScript
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const i1 = new ListNode(10, null);
const i2 = new ListNode(8, i1);
const i3 = new ListNode(3, i2);
const l1 = new ListNode(2, i3);

const j1 = new ListNode(7, null);
const j2 = new ListNode(5, j1);
const l2 = new ListNode(1, j2);

// const l3 = mergeTwoLists(l1, l2);

// while(l3 !== null){
//     console.log(l3.val);
//     l3 = l3.next;
// }
const l4 = mergeTwoLists(l1, l2);

const newList = new LinkedList(l4);
console.log(newList);
console.log(newList.head.next.val);
