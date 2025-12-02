const addCustomer = fn => (...args) => {
  // console.log('Saving customer info');
  return fn(...args);
};

const processOrder = fn => (...args) => {
  // console.log('processing order #' + args[0]);
  return fn(...args);
};

let completeOrder = (...args) => {
  // console.log(`Order #${[...args].toString()} completed`);
};

completeOrder = processOrder(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");

const add = a => b => c => a + b + c;
// console.log(add(1)(2)(3));


/**
 * @Curry @function
 */

const curry = (fn, arity = fn.length) => {
  const curried = (...args) => {
    if (args.length >= arity) {
      return fn(...args);
    }
    return (...next) => curried(...args, ...next);
  };
  return curried;
};

const total = (x, y, z, a) => x + y + z - a;
console.log(curry(total)(10)(20)(30)(40));
const addCurry = (a) => (b) => (c) => a + b + c;

/**
 * Infinite Currying
 */

const infiniteCurr = (a) => (b) => {
  if (b) return infiniteCurr(a + b);
  else return a;
};
console.log(infiniteCurr(1)(2)(3)());
