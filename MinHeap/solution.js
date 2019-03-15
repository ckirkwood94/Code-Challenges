class Heap {
  constructor() {
    this.storage = [];
  }

  insert(value) {
    // push into storage
    this.storage.push(value);
    // get index
    const index = this.storage.length - 1;
    // Move inserted value to proper spot in heap
    this._bubbleUp(index);
  }

  delete() {
    // check to see if heap is empty or only one value
    if (!this.storage.length) return;
    if (this.storage.length === 1) return this.storage.pop();
    // set min to value of first index for return
    const min = this.storage[0];
    // replace index 0 with last in list to delete
    this.storage[0] = this.storage.pop();
    // Move value to correct index
    this._siftDown(0);
    return min;
  }

  getMin() {
    return this.storage[0];
  }

  _bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    // if value at index less than value at parent index swap
    if (this.storage[index] < this.storage[parentIndex]) {
      [this.storage[parentIndex], this.storage[index]] = [
        this.storage[index],
        this.storage[parentIndex],
      ];
      // then call bubble up again until inserted value in correct place in storage
      this._bubbleUp(parentIndex);
    }
  }

  _siftDown(index) {
    // Get both child indices
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let minChildIndex;
    // If both children exist in storage compare and find min child
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      minChildIndex =
        this.storage[leftChildIndex] < this.storage[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      minChildIndex = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      minChildIndex = rightChildIndex;
    }
    // If min child < parent swap
    if (this.storage[minChildIndex] < this.storage[index]) {
      [this.storage[minChildIndex], this.storage[index]] = [
        this.storage[index],
        this.storage[minChildIndex],
      ];
      this._siftDown(minChildIndex);
    }
  }
}

/* Some console.log tests */
const heap = new Heap();
console.log(heap.getMin()); // should print 'undefined'

heap.insert(5);
console.log(heap.getMin()); // should print 5

heap.insert(100);
console.log(heap.getMin()); // should print 5

heap.insert(2);
console.log(heap.getMin()); // should print 2

console.log(heap.delete()); // should print 2
console.log(heap.delete()); // should print 5
console.log(heap.delete()); // should print 100

console.log(heap.getMin()); // should print 'undefined'
