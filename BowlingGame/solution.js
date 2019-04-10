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
    // Current frame on game
    this.frameNum = 1;
    // Current score for frame
    this.frameScore = [];
  }

  _checkStrike() {
    const lastRoll = this.frameScore.length - 1;
    if (this.frameScore[lastRoll] === 'X' || this.frameScore[lastRoll] === 10) {
      return true;
    } else {
      return false;
    }
  }

  _checkSpare() {
    if (
      this.frameScore[1] === '/' ||
      this.frameScore[0] + this.frameScore[1] === 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  _checkEndGame() {
    if (
      this.frameScore.length === 3 ||
      (this.frameScore.length === 2 &&
        (!this._checkSpare || !this.frameScore[0] != 'X'))
    ) {
      return true;
    } else {
      return false;
    }
  }

  roll(numPins) {
    if (this.frameNum != 10) {
      // insert roll into current frame
      this.frameScore.push(numPins);
      // Check for spare or strike
      if (this._checkStrike()) {
        // if strike enter strike into current frame score
        this.frameScore = ['X', '-'];
      } else if (this._checkSpare()) {
        const firstRoll = this.frameScore[0];
        // if spare enter spare into current frame score
        this.frameScore = [firstRoll, '/'];
      }
      // advance frame if length of current frame == 2, insert score and reset frame score
      if (this.frameScore.length === 2) {
        this.scoreboard[this.frameNum] = this.frameScore;
        this.frameScore = [];
        this.frameNum++;
      }
    } else {
      this.frameScore.push(numPins);
      if (this._checkEndGame()) {
        this.score();
      } else {
        if (this._checkStrike()) {
          const lastRoll = this.frameScore.length - 1;
          this.frameScore[lastRoll] = 'X';
        } else if (this._checkSpare() && this.frameScore.length === 2) {
          const firstRoll = this.frameScore[0];
          // if spare enter spare into current frame score
          this.frameScore = [firstRoll, '/'];
        }
      }
    }
  }

  score() {
    console.log('score');
  }
}

const game = new Game();
game.roll(5);
game.roll(3);
console.log(game.scoreboard); // return [5,3]
game.roll(10);
// game.roll(7);
console.log(game.scoreboard); // return [5,3, 2, 7]
game.roll(2); // frame 3
game.roll(7);
game.roll(3); // frame 4
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
game.roll(9);
console.log(game.scoreboard); // return [5,3, 2, 7]
// console.log(game.score());

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
