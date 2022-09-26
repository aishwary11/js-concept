const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`, numCPUs);
} 