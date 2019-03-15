function largestContiguousSum(arr) {
  let max_ending_here = arr[0];
  let max_so_far = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far;
}

/* Some console.log tests */
console.log(largestContiguousSum([5, -9, 6, -2, 3])); // should print 7
console.log(largestContiguousSum([1, 23, 90, 0, -9])); // should print 114
console.log(largestContiguousSum([2, 3, -8, -1, 2, 4, -2, 3])); // should print 7
