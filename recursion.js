function recursion(data) {
    console.log(data);
    if (data > 0) {
        data--;
        recursion(data);
    }
}

recursion(100);

for (let i = 100; i > 0; i--) {
    // console.log(i);
}