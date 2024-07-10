function reportExpenses(rawBalanceSheet) {
  let sum = 0;
  for (let i = 0; i < rawBalanceSheet.length; i++) {
    rawBalanceSheet[i] = rawBalanceSheet[i].replace(/\$/g, '');
    if (0 > rawBalanceSheet[i]) {
      sum += Math.abs(rawBalanceSheet[i]);
    }
  }
  return sum;
}
console.log(reportExpenses(["$1.23", "-5", "-$4.25"]));