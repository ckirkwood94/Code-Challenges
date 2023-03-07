function meeting(s) {
  let inputString = s.toUpperCase();
  let toSort = [];
  let result = '';

  let insertToSort = function () {
    let fname = '';
    let lname = '';
    let i = 0;
    let toggleFName = true;
    let stringLength = s.length;
    console.log('stringLength: ', stringLength);

    // while (inputString[i] !== undefined) {
    for (i = 0, j = stringLength; i <= stringLength; i++) {
      let chara = inputString[i];
      // i++;
      // console.log('While: ', chara);
      if (chara === ':') {
        // console.log('if: :');
        toggleFName = false;
        continue;
      } else if (chara === ';' || i === stringLength) {
        // console.log('else if: ;');
        toggleFName = true;
        toSort.push(`(${lname}, ${fname})`);
        console.log('name: ', fname, lname);
        fname = '';
        lname = '';
        continue;
      }

      if (toggleFName) {
        fname = fname += chara;
      } else {
        lname = lname += chara;
      }
      // console.log('While: ', chara);
    }
    console.log('toSort: ', toSort);
  };
  insertToSort();
  toSort.sort();
  for (i = 0, j = toSort.length; i < j; i++) {
    result += toSort[i];
  }
  return result;
}

let s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

console.log(meeting(s));

// function meeting(s) {

//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//                 .join(')(')
//   return '(' + string + ')'
// }

// let s =
//   'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

// console.log(meeting(s));
