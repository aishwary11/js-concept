// console.log('Start');
// setTimeout(() => console.log('Timeout 1'), 0);
// setImmediate(() => console.log('Immediate 1'));
// process.nextTick(() => console.log('NextTick 1'));
// Promise.resolve().then(() => console.log('Promise 1'));
// console.log('End');

// print 1 to 5 with deplay of 1 sec

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// const arr = [1, 2, 3, 4, 5];
// async function print() {
//   for await (let i of arr) {
//     console.log(i);
//   }
// }

// createreadstream;
// readfile;


// function sleep(delay = 1000) {
//   return new Promise((resolve, reject) => setTimeout(resolve, delay));
// }

function Person() {
  this.name = 'Jack',
    this.age = 25,
    this.sayAge = function () {
      console.log(this.age); // 25
      let innerFunc = () => {
        console.log(this.age); // 25
        console.log(this.name); // Jack
      };
      innerFunc();
    };
}
const x = new Person();
x.sayAge();



const person = {
  name: 'John',
  greet: function () {
    const innerGreet = () => {
      console.log('Hello, ' + this.name); // hello John
    };
    innerGreet();
  }
};
person.greet();


let username = {
  firstName: "Aishwary",
  lastName: "Shah"
};