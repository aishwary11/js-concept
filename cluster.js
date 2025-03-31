const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`, numCPUs);
}