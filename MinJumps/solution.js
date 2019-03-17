function minJumps(arr) {
  // initialize result var
  let numJumps = 0;
  let currIndex = 0;
  // iterate through each value
  while (arr[currIndex]) {
    // Find max reach for next jump
    let maxReach = 0;
    let nextIndex;
    for (let i = 1; i <= arr[currIndex]; i++) {
      let checkIndex = currIndex + i;
      // If reach of check Index is greater than current max reach
      if (i + arr[checkIndex] > maxReach) {
        // set maxReach to compare with other possible jumps
        maxReach = i + arr[currIndex + i];
        // set next index for jump
        nextIndex = currIndex + i;
      }
    }
    // Once max reach is found
    // Jump to next index
    currIndex = nextIndex;
    // add jump to numJumps
    numJumps++;

    // If we reach end of array return number of jumps
    if (currIndex >= arr.length - 1) {
      return numJumps;
    }
  }
  // Unreachable
  return Infinity;
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4
