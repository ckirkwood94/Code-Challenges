function integerPairs(arr, num) {
  let result = [];
  let tracker = {};
  // for loop to iterate through every number
  for (let i = 0; i < arr.length; i++) {
    // for current number find complement
    const complement = num - arr[i];
    // check for complement number in array
    if (tracker[complement]) {
      // if found add to result
      result.push(`${arr[i]} ${complement}`);
    }
    // add number checked to tracker
    tracker[arr[i]] = true;
  }
  return result;
}

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
