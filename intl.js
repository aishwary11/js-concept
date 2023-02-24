const formatter = new Intl.RelativeTimeFormat('en');
const diff = new Date() - new Date('11/05/1994');
console.log(formatter.format(-diff / (1000 * 60 * 60 * 24), 'days'));

/**
 * Currency
 */
const currencyFormatter = new Intl.NumberFormat('en', { style: "currency", currency: 'INR', notation: 'compact' });
console.log(currencyFormatter.format('123'));

const numformatter = new Intl.NumberFormat('en', { notation: 'compact' });
console.log(numformatter.format(99912300));