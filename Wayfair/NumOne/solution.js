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
    //  parentNode: node
    this.parentNode = null;
    //  leftChild: node
    this.leftChild = null;
    //  rightChild: node
    this.rightChild = null;
    //  playerId: int
    this.playerId = playerId;
    //  numOfScores: int
    this.numOfScores = 1;
    //  average: double
    this.average = 0;
  }
}

// Create LeaderBoard class which is a Binary Search Tree
class LeaderBoard {
  constructor() {
    // root: node
    this.root = null;
    // Have a hash map to check if a player already exists or not:
    //  keys = playerId
    //  value = Player
    this.existingPlayers = {};
    //  highscore: node
    this.highscore = null;
  }

  // Methods

  //  add_score takes playerId and newScore:
  add_score(playerId, newScore) {
    //  if player exists:
    if (this.existingPlayers[playerId]) {
      let node = this.existingPlayers[playerId];
      // find new average score
      // take average score multiply by number of scores counted for player then add new score and divide by total number of scores for new average
      // ((averageScore * numOfScores + newScore) / numOfScores + 1)
      node.average =
        (node.average * node.numOfScores + newScore) / (node.numOfScores + 1);
      // increment number of scores for player
      node.numOfScores += 1;
      // Remove and add player to BST
      this.remove(playerId);
      this.insertNode(this.root, node);
    }
    // else player doesn't exist:
    else {
      // Insert player to BST
      this.insert(playerId, newScore);
    }
    // return new average
    return parseFloat(this.existingPlayers[playerId].average).toFixed(1);
  }

  // top takes number of players:
  top(numOfPlayers) {
    // depth first traversal to order from highest to lowest
    // result array to track playerIds in order
    let result = [];
    // hash  map to track which nodes visited
    let visited = {};
    // start node
    let node = this.root;
    // while result array length less than number of players needed:
    while (result.length < numOfPlayers) {
      // if right node and right node not visited:
      if (node.rightChild && !visited[node.rightChild.playerId]) {
        // find max node
        let temp = this.findMaxNode(node);
        // push player id to result
        result.push(temp.playerId);
        // add playerId to visited
        visited[temp.playerId] = true;
        // set current node to temp parent node
        node = temp.parentNode;
      }
      // else if right node null or right node in visited and current node not in visited:
      else if (
        (node.rightChild === null || visited[node.rightChild.playerId]) &&
        !visited[node.playerId]
      ) {
        // add current node to result array
        result.push(node.playerId);
        // add current node to visited
        visited[node.playerId] = true;
        // set current node to either left child or parent
        // if left node and left node not visited:
        if (node.leftChild && !visited[node.leftChild.playerId]) {
          // set node to left child
          node = node.leftChild;
        }
        // else if no parent break because we added all nodes
        else if (node.parentNode === null) {
          break;
        }
        // else set current node to parent node
        else {
          node = node.parentNode;
        }
      }
    }
    return result;
  }

  // reset takes playerId:
  reset(playerId) {
    if (!this.existingPlayers[playerId]) {
      console.log('No existing player');
      return null;
    }
    // remove player from BST
    this.remove(playerId);
    // insert player into BST with same id and 0 score
    this.insert(playerId, 0);
    // reset number of scores to 0
    this.existingPlayers[playerId].numOfScores = 0;
  }

  // BST methods
  insert(playerId, newScore) {
    // create new player
    let newNode = new Player(playerId);
    // add new score to average
    newNode.average = newScore;
    // add player to hash
    this.existingPlayers[playerId] = newNode;
    // if no root node
    if (this.root === null) {
      // set root node to new node
      this.root = newNode;
    } else {
      // else insert node into correct position
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // if new node average less than or equal to curr node
    if (newNode.average <= node.average) {
      // if left node is null
      if (node.leftChild === null) {
        // set as new Node
        node.leftChild = newNode;
        newNode.parentNode = node;
      }
      // else
      else {
        // recurr insertNode
        this.insertNode(node.leftChild, newNode);
      }
    }

    // else new node average is greater than curr node
    else {
      // if right node is null
      if (node.rightChild === null) {
        // set as new Node
        node.rightChild = newNode;
        newNode.parentNode = node;
      }
      // else
      else {
        // recurr insertNode
        this.insertNode(node.rightChild, newNode);
      }
    }
  }

  remove(playerId) {
    // find node to delete
    let deleteNode = this.existingPlayers[playerId];
    // reinitialize with new root node if needed
    this.root = this.removeNode(this.root, deleteNode);
  }

  removeNode(node, deleteNode) {
    const currNodeId = node.playerId;
    const currNodeAverage = node.average;
    const deleteId = deleteNode.playerId;
    const deleteAverage = deleteNode.average;
    // if root is null then tree is empty
    if (node === null) {
      return null;
    }
    // if player ids are the same then handle deleting of node
    else if (currNodeId === deleteId) {
      // if deleting a node with no children
      if (node.leftChild === null && node.rightChild === null) {
        // return null to set parents child node to null
        return null;
      }

      // If node has one child
      if (node.leftChild === null) {
        // reset right childs node to new parent
        node.rightChild.parentNode = node.parentNode;
        // return nodes right child to replace parents child
        return node.rightChild;
      } else if (node.rightChild === null) {
        // reset left childs node to new parent
        node.leftChild.parentNode = node.parentNode;
        // return nodes left child to replace parents child
        return node.leftChild;
      }

      // else deleting node with two children
      else {
        // find predecessor
        // set temp var node - go to left child and find max average starting from there
        const temp = this.findMaxNode(node.leftChild);
        // set temp parents right child node to temp left child node
        temp.parentNode.rightChild = temp.leftChild;
        // set temp left child parents node to temp parents node
        temp.leftChild.parentNode = temp.parentNode;
        // set currNodes playerId, numberOfScores and average to temp data
        node.playerId = temp.playerId;
        node.numOfScores = temp.numOfScores;
        node.average = temp.average;
        return node;
      }
    }
    // if delete average is less than or equal to currNode average
    else if (deleteAverage <= currNodeAverage) {
      // go to left node
      // reset left child if node with node returned from function
      node.leftChild = this.removeNode(node.leftChild, deleteNode);
      return node;
    }
    // if delete average is greater than to currNode average
    else if (deleteAverage > currNodeAverage) {
      // go to right node
      // reset right child if node with node returned from function
      node.rightChild = this.removeNode(node.rightChild, deleteNode);
      return node;
    }
  }

  findMaxNode(node) {
    // if right node is null
    if (node.rightChild === null)
      // found max
      return node;
    else return this.findMaxNode(node.rightChild);
  }
}

// Create a new LeaderBoard Instance

let leader_board = new LeaderBoard();

// Add scores for players to the LeaderBoard

console.log(leader_board.add_score(1, 50)); // 50.0

console.log(leader_board.add_score(2, 80)); // 80.0

console.log(leader_board.add_score(2, 70)); // 75.0

console.log(leader_board.add_score(2, 30)); // 70.0

console.log(leader_board.add_score(3, 90)); // 90.0

console.log(leader_board.add_score(3, 85)); // 87.5

// console.log(leader_board.existingPlayers);

// Get top positions for the leaderboard

console.log(leader_board.top(3)); // [3, 2, 1]

console.log(leader_board.top(2)); // [3, 2]

console.log(leader_board.top(1)); // [3]

// Reset a player 3's scores

leader_board.reset(3); // void

// Player 3 is now at the bottom of the leaderboard

console.log(leader_board.top(3)); // [2, 1, 3]

console.log(leader_board.add_score(2, 0)); // 57.8

console.log(leader_board.top(3));
