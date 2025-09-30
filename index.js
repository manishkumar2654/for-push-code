const cluster = require("cluster");
const os = require("os");
if (cluster.isMaster) {
console.log(`Master ${process.pid} is running`);
const numCPUs = os.cpus().length;
for (let i = 0; i < numCPUs; i++) {
const worker = cluster.fork();
// Listen for messages from workers
worker.on("message", (msg) => {
console.log(`Message from Worker ${worker.process.pid}:`, msg);
});
}
} else {
console.log(`Worker ${process.pid} started`);
// Send message to master every 2s
setInterval(() => {
process.send({ worker: process.pid, msg: "Hello Master!" });
}, 2000);
}