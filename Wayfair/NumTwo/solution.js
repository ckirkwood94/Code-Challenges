// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

// write your code in JavaScript (Node.js 8.9.4)

// Specification:
// Create a class LeaderBoard whose interface includes the following methods:

// Method Name: add_score
//      - Add a new score to the player's average. If a player doesn't exist in the
//      LeaderBoard, they will be automatically added.
//          Args:
//              player_id (Integer): The player's ID.
//              score (Integer): The score to record for the player
//          Returns:
//              Double: The new average score for the given player

// Method Name: top
//      - Get the top player_ids on the leaderboard ordered by their average scores
//      from highest to lowest
//          Args:
//              num_players (Integer): The maximum number of player_ids to return
//          Returns:
//              List<Integer>: a list of player_ids

// Method Name: reset
//      - Removes any scoring information for a player, effectively
//      resetting them to 0
//          Args:
//              player_id (Integer): The player's ID.

// Example Usage:
// // Create a new LeaderBoard Instance
// LeaderBoard leader_board = new LeaderBoard();

// // Add scores for players to the LeaderBoard

// leader_board.add_score(1, 50); // 50.0

// leader_board.add_score(2, 80); // 80.0

// leader_board.add_score(2, 70); // 75.0

// leader_board.add_score(2, 60); // 70.0

// leader_board.add_score(3, 90); // 90.0

// leader_board.add_score(3, 85); // 87.5

// // Get top positions for the leaderboard

// leader_board.top(3); // [3, 2, 1]

// leader_board.top(2); // [3, 2]

// leader_board.top(1); // [3]

// // Reset a player 3's scores

// leader_board.reset(3); // void

// // Player 3 is now at the bottom of the leaderboard

// leader_board.top(3); // [2, 1, 3]

// Expected values

// - Player IDs will always be positive integers small enough to be

// stored as a signed 32-bit integer Scores are integers ranging from 0-100

// Each player is a node with values:
class Player {
  constructor(playerId) {
    //  next: node
    this.next = null;
    // prev: node
    this.prev = null;
    //  playerId: int
    this.playerId = playerId;
    //  numOfScores: int
    this.numOfScores = 0;
    //  average: int
    this.average = 0;
  }
}

// Create LeaderBoard class which is a linked list
class LeaderBoard {
  constructor() {
    // head node
    this.head = null;
    // hash map to check if player already exists
    this.existingPlayers = {};
  }

  add_score(playerId, score) {
    let node;
    if (this.existingPlayers[playerId]) {
      node = this.existingPlayers[playerId];
      this.remove(this.existingPlayers[playerId]);
    } else {
      node = new Player(playerId);
    }
    // find new average score
    // take average score multiply by number of scores counted for player then add new score and divide by total number of scores for new average
    // ((averageScore * numOfScores + newScore) / numOfScores + 1)
    node.average =
      (node.average * node.numOfScores + score) / (node.numOfScores + 1);
    // increment number of scores for player
    node.numOfScores += 1;
    // Remove and add player to linked list

    this.insert(node);
    return parseFloat(this.existingPlayers[playerId].average).toFixed(1);
  }

  top(numOfPlayers) {
    let result = [];
    let node = this.head;
    while (result.length < numOfPlayers) {
      result.push(node.playerId);
      node = node.next;
    }
    return result;
  }

  reset(playerId) {
    // check to see if player exists
    if (!this.existingPlayers[playerId]) {
      console.log('No existing player');
      return null;
    }
    // remove player from linked list
    this.remove(this.existingPlayers[playerId]);
    // create new player resetting the players information
    let node = new Player(playerId);
    // insert new node into linked list
    this.insert(node);
  }

  insert(node) {
    // insert or update player in hash map
    this.existingPlayers[node.playerId] = node;
    // if no head
    if (!this.head) {
      // set head
      this.head = node;
      // else
    } else {
      // insert node starting with head
      this.insertNode(this.head, node);
    }
  }

  insertNode(node, newNode) {
    // if new nodes average is less than or equal to
    if (newNode.average <= node.average) {
      // If next node is null which means at the end of linked list
      if (node.next === null) {
        // curr node next is equal to new node
        node.next = newNode;
        // newNode prev is set to curr node
        newNode.prev = node;
      } else {
        // go to next node
        this.insertNode(node.next, newNode);
      }
    }
    // else curr node average is less than new node
    else {
      // if replacing head
      if (node.playerId === this.head.playerId) {
        // set newNode as head
        this.head = newNode;
        // reset heads prev to null
        this.head.prev = null;
      }
      let temp = node;
      // if not replacing head
      if (temp.prev) {
        temp.prev.next = newNode;
      }
      // set new node next to curr node
      newNode.next = node;
      // set new node prev to curr node prev
      newNode.prev = temp.prev;
      // set curr node prev to new node
      node.prev = newNode;
    }
  }

  remove(node) {
    // check for head
    if (this.head === null) {
      // if no head no players in list
      console.log('no players');
    } else {
      // remove node
      this.removeNode(node);
    }
  }

  removeNode(remove) {
    // if removed node is head
    if (remove.playerId === this.head.playerId) {
      // set next node after head
      remove.next.prev = null;
      this.head = remove.next;
      return;
    }
    // if remove is at end of list
    else if (remove.next === null) {
      // set previous node as end
      remove.prev.next = null;
      return;
    } else {
      // set temp var for next node
      let temp = remove.next;
      // set next nodes prev to prev of removed
      remove.next.prev = remove.prev;
      // set prev nodes next to temp node
      remove.prev.next = temp;
    }
  }

  traverse() {
    let result = [];
    let node = this.head;
    console.log('TRAVERSE', node.prev, node.playerId, node.next.playerId);
    while (node.next) {
      if (node.prev) {
        console.log(
          'TRAVERSE',
          node.prev.playerId,
          node.playerId,
          node.next.playerId
        );
      }
      result.push(node.average);
      node = node.next;
    }
    console.log('TRAVERSE', node.prev.playerId, node.playerId, node.next);
    result.push(node.average);
    return result;
  }
}

// Create a new LeaderBoard Instance

let leader_board = new LeaderBoard();

// Add scores for players to the LeaderBoard

console.log(leader_board.add_score(1, 50)); // 50.0

console.log(leader_board.add_score(2, 80)); // 80.0

// console.log(leader_board.traverse());
console.log(leader_board.add_score(2, 70)); // 75.0

console.log(leader_board.add_score(2, 60)); // 70.0

console.log(leader_board.add_score(3, 90)); // 90.0

// console.log(leader_board.traverse());
console.log(leader_board.add_score(3, 85)); // 87.5
console.log(leader_board.add_score(4, 70)); // 87.5
// console.log(leader_board.traverse());

// console.log(leader_board.existingPlayers);

// Get top positions for the leaderboard
console.log(leader_board.add_score(4, 100));

console.log(leader_board.top(3)); // [3, 2, 1]

console.log(leader_board.top(2)); // [3, 2]

console.log(leader_board.top(1)); // [3]

// Reset a player 3's scores

leader_board.reset(3); // void
// console.log(leader_board.traverse());

// Player 3 is now at the bottom of the leaderboard

console.log(leader_board.top(3)); // [2, 1, 3]

console.log(leader_board.add_score(2, 0)); // 57.8

console.log(leader_board.top(3));
// console.log(leader_board.traverse());

// console.log('HEAD', leader_board.head.next);
// console.log(leader_board.existingPlayers);
