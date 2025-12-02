/**
 * Creates a counter with increment, decrement, getCount, and reset functions
 * @returns {Object} Counter object with methods to manage count
 */
function createCounter() {
  let count = 0;
  return {
    increment: () => count += 1,
    decrement: () => count -= 1,
    getCount: () => count,
    reset: () => {
      count = 0;
      return count;
    },
    getCounter: () => count,
  };
}
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1
console.log(counter.reset());  // Output: 1
console.log(counter.getCounter()); // Output: 0