function narcissistic(value) {
  let number = `${value}`;
  let exponent = parseInt(number.length);
  let result = number
    .split('')
    .map((num) => (num = parseInt(num) ** exponent))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  if (parseInt(result) === value) {
    return true;
  } else {
    return false;
  }
}

console.log(narcissistic(153)); // true
console.log(narcissistic(1652)); // false
