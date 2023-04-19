setImmediate(() => console.log("1st immediate"));
setImmediate(() => {
    console.log("2nd immediate");
    console.log('3rd immediate');
});

process.nextTick(() => console.log("1st process"));
process.nextTick(() => {
    console.log("2nd process");
    console.log('3rd process');
});
console.log("program started");