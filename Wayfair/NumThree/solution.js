function reverseString(str) {
  // var firstLetter = str.charAt(0)
  // var restOfString = str.substring(1)

  console.log(str, str.charAt(0));

  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverseString('abcdefg'));
