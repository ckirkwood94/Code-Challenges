class RomanNumerals {
  static toRoman(num) {
    let currentNum = num;
    let result = '';
    let romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let assignLetter = function (number) {
      for (let romanNumeral in romanNumerals) {
        if (currentNum >= romanNumerals[romanNumeral]) {
          currentNum -= romanNumerals[romanNumeral];
          return romanNumeral;
        }
      }
    };
    while (currentNum !== 0) {
      result += assignLetter(currentNum);
    }
    return result;
  }

  static fromRoman(str) {
    let decode = str.split('');
    let result = 0;
    let romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let decodeChar = function (current, next, index) {
      for (let romanNumeral in romanNumerals) {
        if (current === romanNumeral) {
          return [romanNumerals[romanNumeral], index];
        } else if (current + next === romanNumeral) {
          index++;
          return [romanNumerals[romanNumeral], index];
        }
      }
    };

    for (let i = 0, j = decode.length; i < j; i++) {
      let addNum = 0;
      [addNum, i] = decodeChar(decode[i], decode[i + 1], i);
      result += addNum;
    }

    return result;
  }
}

console.log(RomanNumerals.toRoman(2159));
console.log(RomanNumerals.fromRoman('MMCLIX'));

// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
