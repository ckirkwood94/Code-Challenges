function reconstructTrip(tickets) {
  const hash = {};
  let result = [];
  // Iterate and hash all tickets
  tickets.forEach((ticket) => {
    // If beginning dest is null it is first ticket
    if (!ticket[0]) {
      result.push(ticket[1]);
    } else {
      hash[ticket[0]] = ticket[1];
    }
  });

  // iterate by looking at destination of last added ticket to result and look up in hash and add to result
  while (result.length < tickets.length - 1) {
    lastDest = result[result.length - 1];
    nextDest = hash[lastDest];
    result.push(nextDest);
  }
  return result;
}

/* Some console.log test */
const shorterSet = [[null, 'PDX'], ['PDX', 'DCA'], ['DCA', null]];

const longerSet = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'],
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];

console.log(reconstructTrip(shorterSet)); // should print [ 'PDX', 'DCA' ]
console.log(reconstructTrip(longerSet)); // should print [ 'LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD' ]
