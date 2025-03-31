/**
 * Creates a counter with increment, decrement, getCount, and reset functions
 * @returns {Object} Counter object with methods to manage count
 */
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      return count += 1;
    },
    decrement: function () {
      return count -= 1;
    },
    getCount: function () {
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1
console.log(counter.reset());  // Output: 1
