// // Compose function
// const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);

// // Functions
// const addFee = amount => amount + 2;
// const addDiscount = amount => amount - 5;

// // function composition
// const composition = compose(addFee, addDiscount)(100);

// console.log(composition);
const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);
const double = x => x * 2;
const square = x => x * x;
const sphere = x => Math.PI * x;

// function composition
let output_final = compose(square, double, sphere)(2);
// let output_final = compose(sphere, double, square)(2);
console.log(output_final);