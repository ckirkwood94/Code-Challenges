function recursiveDepthFirstForEach(node, cb) {
  cb(node.value);
  if (node.left) {
    recursiveDepthFirstForEach(node.left, cb);
  }
  if (node.right) {
    recursiveDepthFirstForEach(node.right, cb);
  }
}

function iterativeDepthFirstForEach(node, cb) {
  // create stack to keep track of order
  let stack = [];
  // insert first node into stack
  stack.push(node);
  // iterate until stack is 0
  while (stack.length > 0) {
    // get last node on stack
    let currNode = stack.pop();
    // push right node first for ordering
    if (currNode.right) {
      stack.push(currNode.right);
    }
    // push left node
    if (currNode.left) {
      stack.push(currNode.left);
    }
    // Call cb
    cb(currNode.value);
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
/* Some console.log tests */
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = (x) => console.log(x);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();
