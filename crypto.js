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
const stringer = "abcdefghijklmnopqrstuvwxyz$%&*()@!1234567890";
console.log('Random Value ::', stringer.randomValue(10));
console.log(str1.SumOfLength(str2));
String.prototype.strLength = function (fn) {
  console.log(this.charAt(fn));
  return this.length;
};
console.log('Aishwary'.strLength(5));
String.prototype.strLength1 = function (fn) {
  console.log(fn(this.charAt(5)));
  return this.length;
};
console.log('Aishwary'.strLength1(i => i));