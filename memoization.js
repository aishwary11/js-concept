/**
 * Method 1
 */

const memoize = fn => {
  const cache = [];
  return (...args) => {
    const key = args.join();
    const result = cache[key] ? cache[key] : fn(...args);
    cache[key] = result;
    return result;
  };
};

// const memoize = fn => {
//   const cache = {};
//   return (...args) => {
//     const key = JSON.stringify(args);// faster approach
//     // const key = args[0]; // slower approach
//     if (cache[key]) {
//       return cache[key];
//     };
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// };
// const add = (num) => num + 10;
const fib = (pos) => pos < 2 ? pos : fib(pos - 1) + fib(pos - 2);
const fact = (pos) => pos == 0 ? 1 : pos * fact(pos - 1);
const memoizationFib = memoize(fib);
const memoizationFact = memoize(fact);
console.time("memofib");
console.log(memoizationFib(30));
console.log(memoizationFib(30));
console.log(memoizationFib(40));
console.log(memoizationFib(40));
console.timeEnd("memofib");

console.time("memofact");
console.log(memoizationFact(10));
console.log(memoizationFact(10));
console.log(memoizationFact(20));
console.log(memoizationFact(20));
console.timeEnd("memofact");

function fibMemo(n, prevValue = []) {
  if (prevValue[n] != null) return prevValue[n];
  let result = n <= 2 ? 1 : fibMemo(n - 1, prevValue) + fibMemo(n - 2, prevValue);
  prevValue[n] = result;
  return result;
}

console.time("fibmemo");
console.log(fibMemo(100));
console.log(fibMemo(100));
console.log(fibMemo(40));
console.log(fibMemo(40));
console.timeEnd("fibmemo");

const factMemo = (n, prevValue = []) => {
  if (prevValue[n] != null) return prevValue[n];
  let result = n == 0 ? 1 : n * factMemo(n - 1, prevValue[n]);
  prevValue[n] = result;
  return result;
};


console.time("factmemo");
console.log(factMemo(10));
console.log(factMemo(10));
console.log(factMemo(20));
console.log(factMemo(20));
console.timeEnd("factmemo");