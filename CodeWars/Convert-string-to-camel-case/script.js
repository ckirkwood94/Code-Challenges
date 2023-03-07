function toCamelCase(str) {
  let string = str;
  return string
    .split(/[-_]/)
    .map((word, index) => {
      if (index > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join('');
}

console.log(toCamelCase('the-stealth-warrior'));
// Expected "theStealthWarrior"
console.log(toCamelCase('the_other_warrior'));
// Expected "theOtherWarrior"
console.log(toCamelCase('change_this-please'));
// Expected "changeThisPlease"
