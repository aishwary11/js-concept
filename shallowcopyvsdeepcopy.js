// original object
const originalObj = { name: 'John', age: 30, hobbies: ['reading', 'swimming'] };

// shallow copy & also ... spread operator can be used for shallow copy
const shallowCopy = Object.assign({}, originalObj);

// deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObj));

// modifying the original object
originalObj.hobbies.push('hiking');

console.log(originalObj); // { name: 'John', age: 30, hobbies: [ 'reading', 'swimming', 'hiking' ] }
console.log(shallowCopy); // { name: 'John', age: 30, hobbies: [ 'reading', 'swimming', 'hiking' ] } (shallow copy is affected by change)
console.log(deepCopy); // { name: 'John', age: 30, hobbies: [ 'reading', 'swimming' ] } (deep copy is not affected by change)
