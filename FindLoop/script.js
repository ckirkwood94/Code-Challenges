// function loop_size(node) {
//   let loop = 0;
//   let check = [];
//   let next = function (node) {
//     if (check.includes(node)) {
//       //       console.log('if')
//       loop = check.length - check.indexOf(node);
//       return;
//     } else {
//       //       console.log('else')
//       //       loop++;
//       check.push(node);
//       next(node.next);
//     }
//   };

//   next(node);
//   return loop;
//   //   console.log("node: ", node);
//   //   console.log("next: ", node.next);
//   //   console.log("getNext(): ", node.getNext());
// }

function loop_size(node) {
  function countNodes(node) {
    var result = 1;
    temp = node;
    while (temp.next != node) {
      result++;
      temp = temp.next;
    }
    return result;
  }

  let slow_p = node;
  let fast_p = node;

  while (slow_p != null && fast_p != null && fast_p.next != null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;

    /*
     * If slow_p and fast_p meet at some point then there is a loop
     */
    if (slow_p == fast_p) {
      return countNodes(slow_p);
    }
  }

  /* Return 0 to indicate that there is no loop */
  return 0;
}
