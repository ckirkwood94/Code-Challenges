function climbStairs(number, cache) {
  if (number < 0) {
    return 0;
  } else if (number === 0) {
    return 1;
  } else if (cache[number] > 1) {
    return cache[number];
  } else {
    cache[number] =
      climbStairs(number - 1, cache) +
      climbStairs(number - 2, cache) +
      climbStairs(number - 3, cache);
    return cache[number];
  }
}

// * Some console.log tests */
// console.log(climbStairs(10)); // should print 274
// console.log(climbStairs(30)); // should print 53798080

console.log(climbStairs(30, Array(30))); // should also print 53798080, though must quicker than the naive implementation
console.log(climbStairs(50, Array(50))); // should print 10562230626642
