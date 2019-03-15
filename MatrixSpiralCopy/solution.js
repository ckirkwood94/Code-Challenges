function spiralCopy(matrix) {
  // Init result as array
  let result = [];
  // Track top and bot row, left and right column
  const numRows = matrix.length;
  const numColumns = matrix[0].length;

  let top = 0;
  let bottom = numRows - 1;
  let right = numColumns - 1;
  let left = 0;
  // repeat until rows intersect and columns intersect
  while (top <= bottom && left <= right) {
    // add top row from left column to right column
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    // increment top row
    top++;
    // add right column from top row to bottom row
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    // decrement right column
    right--;
    // Check if bottom row wasn't already added by top row earlier
    if (bottom >= top) {
      // add bottom row from right column to left column
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      // decrement bottom row
      bottom--;
    }
    // check if left column wasn't already added by right column
    if (left <= right) {
      // add left column from bottom row to top row
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      // increment left column
      left++;
    }
  }
  return result;
}

/* Some simple console.log tests */
console.log(spiralCopy([[1]])); // should print [1]

console.log(spiralCopy([[1], [2]])); // should print [1, 2]

console.log(
  spiralCopy([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
); // should print [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
