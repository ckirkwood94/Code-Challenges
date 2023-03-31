function primeFactors(n) {
  let number = n;
  let factors = {};
  let divisor = 2;
  let result = '';
  let max = Math.floor(Math.sqrt(n));

  while (number > 1 && divisor <= max) {
    if (number % divisor === 0) {
      number = number / divisor;
      factors[divisor] = (factors[divisor] || 0) + 1;
    } else {
      divisor += 1;
    }
  }

  for (const property in factors) {
    if (factors[property] === 1) {
      result += `(${property})`;
    } else {
      result += `(${property}**${factors[property]})`;
    }
  }
  if (Object.keys(factors).length === 0) {
    result = `(${number})`;
  }
  if (number > 1) {
    result += `(${number})`;
  }
  return result;
}

primeFactors(54995);
