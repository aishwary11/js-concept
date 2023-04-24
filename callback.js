const add = (a, b) => a + b;
// const callback = (num1, num2, cb) => cb(num1, num2);
// console.log(callback(1, 2, add));

/**
 * Example 2
 */
const callbacker = (num, cb) => {
  if (typeof num === 'number') return cb({ status: true, data: num });
  else return cb({ status: false, data: null });
};
callbacker(1, ({ status, data }) => console.log(status, data));

/**
 * with 2 callback function
 */
function callback(num, result, error) {
  if (typeof num === "number") result({ msg: "Its a number", data: num });
  else error({ msg: "Its a String", data: num });
}

callback("1", (res) => console.log(res), (err) => console.error(err));