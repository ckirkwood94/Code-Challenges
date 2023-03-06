function validBraces(braces) {
  let openBraces = ['(', '[', '{'];
  let closedBraces = [')', ']', '}'];
  let check = [];
  for (i = 0, j = braces.length; i < j; i++) {
    let chara = braces[i];
    if (openBraces.includes(chara)) {
      check.push(braces[i]);
    } else {
      if (
        (chara === closedBraces[0] &&
          check[check.length - 1] === openBraces[0]) ||
        (chara === closedBraces[1] &&
          check[check.length - 1] === openBraces[1]) ||
        (chara === closedBraces[2] && check[check.length - 1] === openBraces[2])
      ) {
        check.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(validBraces('(){}[]'), ' => true');
console.log(validBraces('([{}])'), ' => true');
console.log(validBraces('(}'), ' => false');
console.log(validBraces('[(])'), ' => false');
console.log(validBraces('[({})](]'), ' => false');
