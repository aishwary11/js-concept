const { Temporal } = require('temporal-polyfill');
console.log(Temporal.Now.zonedDateTimeISO().toString());