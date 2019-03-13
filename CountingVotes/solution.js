function countVotes(votes) {
  // create object to keep track of num of votes for each name
  let counter = {};
  // create variable that holds name of current winner
  let winner = votes[0];
  // iterate through names
  for (let i = 0; i < votes.length; i++) {
    // add to vote count
    if (!counter[votes[i]]) {
      counter[votes[i]] = 1;
    } else counter[votes[i]] += 1;
    // compare votes to current winner
    if (counter[votes[i]] > counter[winner]) {
      winner = votes[i];
    } else if (counter[votes[i]] === counter[winner]) {
      // if tie check alphabetically
      if (votes[i] > winner) winner = votes[i];
    }
  }
  return winner;
}

console.log(
  countVotes([
    'veronica',
    'mary',
    'alex',
    'james',
    'mary',
    'michael',
    'alex',
    'michael',
  ])
); // should print 'michael'

console.log(
  countVotes([
    'john',
    'johnny',
    'jackie',
    'johnny',
    'john',
    'jackie',
    'jamie',
    'jamie',
    'john',
    'johnny',
    'jamie',
    'johnny',
    'john',
  ])
); // should print 'johnny'
