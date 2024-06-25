const testJson = require('./test.json');
const env = "prod";
console.log(crypto.randomUUID());
console.log(testJson[env].name);