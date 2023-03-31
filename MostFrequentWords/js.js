function topThreeWords(text) {
  let words = text.toLowerCase().match(/[\w']+/g);
  let wordCounts = {};
  let result = [];
  console.log(words);
  if (!words) {
    return result;
  }
  for (word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  for (i = 0; i < 3; i++) {
    let word = '';

    if (Object.keys(wordCounts).length) {
      word = Object.keys(wordCounts).reduce((a, b) =>
        wordCounts[a] > wordCounts[b] ? a : b
      );
      console.log('word: ', word);
      if (word === "'") {
        continue;
      }
      result.push(word);
      delete wordCounts[word];
    }
  }
  console.log(result);
  return result;
}

// topThreeWords(
//   'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'
// );
// // ["a", "of", "on"]

// topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e');
// // ["e", "ddd", "aa"]

// topThreeWords("  //wont won't won't");
// // ["won't", "wont"]

// topThreeWords('  ...  ');

topThreeWords("  '  ");
