const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.any([promise1, promise2, promise3]).then((value) => console.log(value));


function clo() {
  var a = 10;
  return () => a;
}
// console.log(clo()());


function counter() {
  let count = 0;
  function val() {
    return count;
  }
  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  return { val, increment, decrement };
}

// const fun1 = counter();
// const fun2 = counter();
// fun1.increment();
// fun1.increment();
// fun1.increment();
// fun2.increment();
// fun2.increment();
// fun2.increment();

function letExample() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}

letExample();



function abc() {
  console.log(1);
  setTimeout(() => { console.log(2); }, 2000);
  console.log(3);
  setTimeout(() => { console.log(4); }, 0);
  console.log(5);
}
console.log(6);
abc();
console.log(7);