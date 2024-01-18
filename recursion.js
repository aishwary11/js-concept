function recursion(num = 10) {
    if (num <= 0) return;
    console.log(num);
    recursion(num - 1);
}
recursion();

// for (let i = 100; i > 0; i--) {
// console.log(i);
// }