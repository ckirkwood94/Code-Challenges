function isLinkedListPalindrome(node) {
  // create stack to track values
  let stack = [];
  // moves twice as fast once at end we reached halfway point
  let trackLength = node;
  // moves one node at time
  let traverseList = node;
  // add values to stack until half way point
  while (trackLength && trackLength.next) {
    stack.push(traverseList.value);
    traverseList = traverseList.next;
    trackLength = trackLength.next.next;
  }
  // check length, if trackLength and not trackLength.next then odd number in list
  if (trackLength) {
    // Go to next node before checking against stack if odd number
    traverseList = traverseList.next;
  }
  // compare last value of stack to next value after half way point
  while (traverseList) {
    const check = stack.pop();

    if (check !== traverseList.value) {
      return false;
    }

    traverseList = traverseList.next;
  }

  return true;
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(2);
const e = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const w = new ListNode(10);
const x = new ListNode(11);
const y = new ListNode(11);
const z = new ListNode(10);

w.next = x;
x.next = y;
y.next = z;

console.log(isLinkedListPalindrome(a)); // should print true
console.log(isLinkedListPalindrome(b)); // should print false since now the 'a' node is not included in the linked list

console.log(isLinkedListPalindrome(w)); // should print true
