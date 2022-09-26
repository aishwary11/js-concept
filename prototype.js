const arr = ["Aishwary", "Shah"];
const myObject = {
  city: 'Mumbai',
  greet() {
    return `Greetings from ${this.city}`;
  }
};
console.log('..........', myObject.greet());
// console.log(Object.getPrototypeOf(myObject));