function getPINs(observed) {
  const possibilities = {
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
    0: ['8', '0'],
  };
  let splitDigits = observed.split('');
  let result = possibilities[splitDigits[0]];
  splitDigits.shift();
  let temp = [];
  splitDigits.forEach((nextObserved) => {
    possibilities[nextObserved].forEach((possibleDigit) => {
      result.forEach((currentDigit) => {
        temp.push(currentDigit + possibleDigit);
      });
    });
    result = temp;
    temp = [];
  });

  console.log('Result: ', result);
  return result;
}

getPINs('8');
getPINs('12');
getPINs('369');
