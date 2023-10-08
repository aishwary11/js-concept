/**
 * using map
 */
// const memoizeMap = fn => {
// 	const cache = new Map();
// 	return (...args) => {
// 		const key = args.join();
// 		let result = cache.get(key);
// 		if (result) {
// 			return result;
// 		} else {
// 			result = fn(...args);
// 			cache.set(key, result);
// 			return result;
// 		}
// 	};
// };

// const factMemoMap = memoizeMap(n => n == 0 ? 1 : n * factMemoMap(n - 1));
// console.time("Fact");
// console.log(factMemoMap(10));
// console.log(factMemoMap(10));
// console.log(factMemoMap(20));
// console.log(factMemoMap(20));
// console.timeEnd("Fact");

// const fibMemoMap = memoizeMap(pos => pos < 2 ? pos : fibMemoMap(pos - 1) + fibMemoMap(pos - 2));
// console.time("Fib");
// console.log(fibMemoMap(40));
// console.log(fibMemoMap(40));
// console.log(fibMemoMap(100));
// console.log(fibMemoMap(100));
// console.timeEnd("Fib");

/**
 * using object
 */
const memoizeObj = fn => {
	const cache = {};
	return (...args) => {
		const key = args.join();
		if (key in cache) {
			return cache[key];
		} else {
			const result = fn(...args);
			cache[key] = result;
			return result;
		}
	};
};

const factMemoObj = memoizeObj(n => n == 0 ? 1 : n * factMemoObj(n - 1));
console.time("FactObj");
console.log(factMemoObj(10));
console.log(factMemoObj(10));
console.log(factMemoObj(20));
console.log(factMemoObj(20));
console.timeEnd("FactObj");

const fibMemoObj = memoizeObj(pos => pos < 2 ? pos : fibMemoObj(pos - 1) + fibMemoObj(pos - 2));
console.time("FibObj");
console.log(fibMemoObj(40));
console.log(fibMemoObj(40));
console.log(fibMemoObj(100));
console.log(fibMemoObj(100));
console.timeEnd("FibObj");


const fibo = (n) => n < 2 ? n : fibo(n - 1) + fibo(n - 2);
const fact = (n) => n == 0 ? 1 : n * fact(n - 1);
console.time("....");
console.log(fibo(40));
console.log(fibo(40));
console.log(fact(20));
console.log(fact(20));
console.timeEnd("....");