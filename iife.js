(function iife(num) {
  if (num === 5) {
    console.log('Finished');
  } else {
    num++;
    console.log(num);
    iife(num);
  }
})(0);