const memoize = fn => {
  const cache = {};
  return (...args) => {
    if (JSON.stringify(args) in cache) {
      console.log(cache);
      return cache[JSON.stringify(args)];
    };
    const result = fn(...args);
    cache[JSON.stringify(args)] = result;
    return result;
  };
};
// const add = (num) => num + 10;
const fib = (pos) => pos < 2 ? pos : fib(pos - 1) + fib(pos - 2);
const memoizationEx = memoize(fib);
// console.time("lol");
// console.log(memoizationEx(40));
// console.log(memoizationEx(30));
// console.log(memoizationEx(40));
// console.log(memoizationEx(40));
// console.log(memoizationEx(40));
// console.log(fib(40))
// console.log(fib(40))
// console.log(fib(40))
// console.timeEnd("lol");

function fibMemo(n, prevValue = []) {
  if (prevValue[n] != null) return prevValue[n];
  let result = n <= 2 ? 1 : fibMemo(n - 1, prevValue) + fibMemo(n - 2, prevValue);
  prevValue[n] = result;
  return result;
}

console.time("lol1");
console.log(fibMemo(100));
console.log(fibMemo(100));
console.log(fibMemo(100));
console.log(fibMemo(100));
console.timeEnd("lol1");


