function balancedBrackets(str) {
  if (str.length == 1) return false;
  let arr = str.split('');
  const openingBrackets = { '{': '}', '(': ')', '[': ']' };
  const closingBrackets = { '}': true, ')': true, ']': true };
  stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openingBrackets[arr[i]]) {
      stack.push(arr[i]);
    } else if (closingBrackets[arr[i]]) {
      if (openingBrackets[stack.pop()] !== arr[i]) {
        return false;
      }
    }
  }
  return true;
}

/* Some console.log tests */
console.log(balancedBrackets('{}[]()')); // should print true
console.log(balancedBrackets('{(([]))}')); // should print true
console.log(balancedBrackets('{ [ ] ( ) }')); // should print true
console.log(balancedBrackets('{ [ ( ] ) }')); // should print false
console.log(balancedBrackets('(')); // should print false
console.log(balancedBrackets('{[}')); // should print false
