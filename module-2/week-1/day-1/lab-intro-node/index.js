class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    console.log("in the add method", item, this.items);
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}
const ourSortedList = new SortedList();
ourSortedList.add("hello");
module.exports = SortedList;
