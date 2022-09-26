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

const curry = fn => curried = (...args) => fn.length !== args.length ? curried.bind(null, ...args) : fn(...args);

const total = (x, y, z, a) => x + y + z - a;
console.log(curry(total)(10)(20)(30));
const addCurry = (a) => (b) => (c) => a + b + c;

