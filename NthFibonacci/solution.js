function nthFib(n, cache = Array(n)) {
  // define base case
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = nthFib(n - 1, cache) + nthFib(n - 2, cache);
    return cache[n];
  }
}

console.log(nthFib(1001));
