// O(n^2) time complexity
function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error('Requires atleast two numbers');
  }

  const result = [];
  for (let i = 0; i < intArray.length; i++) {
    result[i] = 1;
    for (let j = 0; j < intArray.length; j++) {
      if (j === i) {
        continue;
      }
      result[i] *= intArray[j];
    }
  }
  return result;
}

/* Some console.log tests */
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4, 5])); // should print [120, 60, 40, 30, 24]

console.log(getProductsOfAllIntsExceptAtIndex([9, 90])); // sould print [90, 9]
