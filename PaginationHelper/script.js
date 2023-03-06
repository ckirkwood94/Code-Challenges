class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    // console.log('itemCount: ', this.collection.length);
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    let pages = Math.ceil(this.collection.length / this.itemsPerPage);
    return pages;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    // console.log('pageItemCount: ', pageIndex);
    let maxPage = this.pageCount() - 1;
    let numOfItems = -1;
    if (pageIndex === maxPage) {
      numOfItems = this.itemCount() % this.itemsPerPage;
      if (numOfItems === 0) {
        numOfItems = this.itemsPerPage;
      }
    } else if (pageIndex < maxPage && pageIndex > -1) {
      numOfItems = this.itemsPerPage;
    }
    return numOfItems;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    let itemOnPage = -1;
    if (this.collection[itemIndex] || this.collection[itemIndex] === 0) {
      itemOnPage = Math.floor(itemIndex / this.itemsPerPage);
    }
    return itemOnPage;
  }
}

let result = new PaginationHelper([9, 8, 7, 6, 0, 4, 3, 2, 1], 120);
// console.log('test');
console.log('itemCount: ', result.itemCount());
console.log('pageCount: ', result.pageCount());
console.log('pageItemCount: ', result.pageItemCount(0));
console.log('pageIndex: ', result.pageIndex(7));
