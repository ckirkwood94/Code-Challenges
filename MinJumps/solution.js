function minJumps(arr) {
  // initialize result var
  let result = 0;
  let currIndex = 0;
  // iterate through each value
  while (currIndex <= arr.length - 1) {
    if (arr[currIndex] === 0) {
      // unreachable
      return Infinity;
    }
    // Find max reach for next jump
    let maxReach = 0;
    let nextIndex;
    for (let i = 1; i <= arr[currIndex]; i++) {
      if (i + arr[currIndex + i] > maxReach) {
        maxReach = i + arr[currIndex + i];
        nextIndex = currIndex + i;
      }
    }
    currIndex = nextIndex;
    if (currIndex <= arr.length - 1) {
      result++;
    }
  }
  return result;
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4
