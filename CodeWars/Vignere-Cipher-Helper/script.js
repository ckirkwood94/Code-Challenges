function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let keyIndex = -1;
    let word = str.split('');
    let result = word.map((letter) => {
      keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;
      if (!abc.includes(letter)) {
        return letter;
      }
      let keyLetterIndex = abc.indexOf(key.at(keyIndex));
      let wordLetterIndex = abc.indexOf(letter);

      return abc.at((keyLetterIndex + wordLetterIndex) % abc.length);
    });
    return result.join('');
  };

  this.decode = function (str) {
    let keyIndex = -1;
    let word = str.split('');
    let result = word.map((letter) => {
      keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;
      if (!abc.includes(letter)) {
        return letter;
      }
      let keyLetterIndex = abc.indexOf(key.at(keyIndex));
      let wordLetterIndex = abc.indexOf(letter);

      return abc.at(
        (abc.length + wordLetterIndex - keyLetterIndex) % abc.length
      );
    });
    return result.join('');
  };
}

abc = 'abcdefghijklmnopqrstuvwxyz';
key = 'password';
c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars'));
console.log(c.encode('waffles'));
console.log(c.decode('rovwsoiv'));
