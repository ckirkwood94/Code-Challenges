class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createMinimalBST(arr) {
  // Since already sorted we alway start from middle index to minimize depth
  // Recursively call helper function
  return createMinimalBSTHelper(arr, 0, arr.length - 1);
}

function createMinimalBSTHelper(arr, left, right) {
  // Base case: if right index less than left index return null
  if (left > right) {
    return null;
  }
  // create node from middle
  const middle = Math.floor((left + right) / 2);
  const node = new BinaryTreeNode(arr[middle]);
  // call function on left and right side of index passing arr and left and right indices
  node.left = createMinimalBSTHelper(arr, left, middle - 1);
  node.right = createMinimalBSTHelper(arr, middle + 1, right);
  // return node
  return node;
}

////////////
// TESTS
////////////

/* Helper function to validate that the created tree is a valid BST */
function isBinarySearchTree(root) {
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: root,
    lowerBound: -Infinity,
    upperBound: Infinity,
  });
  while (nodeAndBoundsStack.length) {
    const nodeAndBounds = nodeAndBoundsStack.pop();
    const node = nodeAndBounds.node;
    const lowerBound = nodeAndBounds.lowerBound;
    const upperBound = nodeAndBounds.upperBound;
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }
    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value,
      });
    }
    if (node.right) {
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound,
      });
    }
  }
  return true;
}

/* Helper function to check the max height of a BST */
function maxDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

/* Some console.log tests */
let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let bst = createMinimalBST(sortedArray);

console.log(isBinarySearchTree(bst)); // should print true
console.log(maxDepth(bst)); // should print 3

sortedArray = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bst = createMinimalBST(sortedArray);

console.log(isBinarySearchTree(bst)); // should print true
console.log(maxDepth(bst)); // should print 5
