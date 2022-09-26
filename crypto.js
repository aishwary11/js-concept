const crypto = require('crypto');
// console.log(crypto.randomBytes(12).toString('base64'));

String.prototype.randomValue = function (num = 5) {
  let randVal = "";
  for (let i = 0; i < num; i++) randVal += this.charAt(Math.floor(Math.random() * this.length));
  return randVal;
};

var str1 = "GeeksforGeeks";
var str2 = "A Computer Science Portal";

String.prototype.SumOfLength = function (arg) {
  return this.length + arg.length;
};
const stringer = "abcdefghijklmnopqrstuvwxyz$%&*(@!1234567890";
console.log(stringer.randomValue(15));
console.log(str1.SumOfLength(str2));