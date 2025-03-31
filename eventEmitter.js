const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
eventEmitter.on('data', (data) => console.log("data", data.value));
eventEmitter.emit('data', { value: 123 });