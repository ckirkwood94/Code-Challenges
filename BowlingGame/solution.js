class Game {
  constructor() {
    // Keep track of scoreboard
    // Create object/hash key = frame, value = arr of pins knocked down
    this.scoreboard = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
    };
    // array to keep track of each roll
    this.rolls = [];
    // Var to keep track of frame
    this.currentFrame = 1;
  }

  roll(numPins) {
    // push rolls in rolls
    this.rolls.push(numPins);
  }

  score() {
    const score = this.rolls.reduce((acc, cur) => {
      return (acc += cur);
    }, 0);
    return score;
  }
}

const game = new Game();
game.roll(5);
game.roll(3);
console.log(game.rolls); // return [5,3]
game.roll(2);
game.roll(7);
console.log(game.rolls); // return [5,3, 2, 7]
game.roll(2); // frame 3
game.roll(7);
game.roll(2); // frame 4
game.roll(7);
game.roll(2); // frame 5
game.roll(7);
game.roll(2); // frame 6
game.roll(7);
game.roll(2); // frame 7
game.roll(7);
game.roll(2); // frame 8
game.roll(7);
game.roll(2); // frame 9
game.roll(7);
game.roll(2); // frame 10
game.roll(7);
console.log(game.rolls); // return [5,3, 2, 7]
console.log(game.score());

// // if current frame less than 10
// if (this.currentFrame < 10) {
//   // if current frame has less than 2 rolls and less than sum 10
//   if (this.scoreboard[currentFrame].length < 2 && )
//   // scoreboard current frame push value

//   // if current frame length == 2
//   // increment current frame
// }

// // else 10th frame
// // if length 0
// // push score
// // else if length 1 sum !=10
// //  push score
// // if length 2 sum != 10
// // score method
// // else if length 2 sum == 10
// // push score
// // score method
