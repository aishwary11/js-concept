(function iife() {
  num++;
  console.log(num);
  return num != 5 ? iife(num) : console.log('Finished');
})(num = 0);