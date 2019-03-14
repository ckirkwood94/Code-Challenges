function kthToLastNode(k, node) {
  let currNode = node;
  // Track kth node using a queue that is size kth
  let queue = [];
  // define base case
  // if node.next == null return kth node value
  while (currNode) {
    // push current node to queue
    queue.push(currNode);
    // if queue length greater than k remove first element
    if (queue.length > k) {
      queue.shift();
    }
    // if last node return first element in queue
    if (currNode.next) {
      currNode = currNode.next;
    } else {
      if (queue.length === k) {
        let resultNode = queue.shift();
        return resultNode.value;
      } else {
        return 'K is larger than list';
      }
    }
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new ListNode('Australian Sheperd');
let b = new ListNode('Beagle');
let c = new ListNode('Cairne Terrier');
let d = new ListNode('Dobermann');
let e = new ListNode('English Mastiff');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Some console.log tests */
console.log(kthToLastNode(2, a)); // should print 'Dobermann'
console.log(kthToLastNode(5, a)); // should print 'Australian Sheperd'
console.log(kthToLastNode(3, c)); // should print 'Cairne Terrier'
