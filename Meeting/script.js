// function meeting(s) {
//   let inputString = s.toUpperCase();
//   let toSort = [];
//   let result = '';

//   let insertToSort = function () {
//     let fname = '';
//     let lname = '';
//     let i = 0;
//     let toggleFName = true;
//     let stringLength = s.length;
//     console.log('stringLength: ', stringLength);

//     // while (inputString[i] !== undefined) {
//     for (i = 0, j = stringLength; i <= stringLength; i++) {
//       let chara = inputString[i];
//       // i++;
//       // console.log('While: ', chara);
//       if (chara === ':') {
//         // console.log('if: :');
//         toggleFName = false;
//         continue;
//       } else if (chara === ';' || i === stringLength) {
//         // console.log('else if: ;');
//         toggleFName = true;
//         toSort.push(`(${lname}, ${fname})`);
//         console.log('name: ', fname, lname);
//         fname = '';
//         lname = '';
//         continue;
//       }

//       if (toggleFName) {
//         fname = fname += chara;
//       } else {
//         lname = lname += chara;
//       }
//       // console.log('While: ', chara);
//     }
//     console.log('toSort: ', toSort);
//   };
//   insertToSort();
//   toSort.sort();
//   for (i = 0, j = toSort.length; i < j; i++) {
//     result += toSort[i];
//   }
//   return result;
// }

// let s =
//   'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
// // expected: (CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)
// console.log(meeting(s));

function meeting(s) {
  // let string = s
  //   .toUpperCase()
  //   .split(';')
  //   .map((x) => x.split(':').reverse().join(', '))
  //   .sort()
  //   .join(')(');
  // return '(' + string + ')';

  let string = s;
  console.log('String: ', string);

  // change string to upper case
  let upperCaseString = string.toUpperCase();
  console.log('UpperCase: ', upperCaseString);

  // split at semi colon and puts into array
  let stringToArray = upperCaseString.split(';');
  console.log('String Split: ', stringToArray);

  // map iterates through array
  //  for every fullName in array
  //    split the fullName string into an array [firstName, lastName]
  //    reverse the array to swap firstName and lastName [lastName, firstName]
  //    join iterates through array concatenating lastName and ', ' and firstName into string.
  //      "lastName, firstName"
  // map then returns modified array
  let mappedArray = stringToArray.map((fullName) =>
    fullName.split(':').reverse().join(', ')
  );
  console.log('String map: ', mappedArray);

  // sort mapped array
  let sortedArray = mappedArray.sort();
  console.log('Sorted array:', sortedArray);

  // join sorted array into single string make sure to have seperator ')(' to match expected output
  let sortedString = sortedArray.join(')(');

  // concatenate parenthesis to match expected output and return
  return '(' + sortedString + ')';
}

let s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

// expected: (CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)
console.log(meeting(s));
