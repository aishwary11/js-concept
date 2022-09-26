const extension = ".json";

const extensionObj = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json'
};

console.time("Object");
console.log(extensionObj[extension]);
console.timeEnd("Object");

const myMap = new Map();
myMap.set('.css', "text/css");
myMap.set('.js', "text/javascript");
myMap.set('.json', "application/json");

console.time("Map");
console.log(myMap.get(extension));
console.timeEnd("Map");