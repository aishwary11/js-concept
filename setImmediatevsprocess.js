setImmediate(() => console.log("1st immediate"));
setImmediate(() => {
    console.log("2nd immediate");
    console.log('3rd immediate');
});

setTimeout(() => console.log("1st timeout"));
setTimeout(() => {
    console.log("2nd timeout");
    console.log('3rd timeout');
});

process.nextTick(() => console.log("1st process"));
process.nextTick(() => {
    console.log("2nd process");
    console.log('3rd process');
});
console.log("program started");