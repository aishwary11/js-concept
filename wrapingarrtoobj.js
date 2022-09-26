const categories = [
  {
    category_code: 'COLD',
    category_name: 'Cold Water',
    merchant_code: 79225
  },
  {
    category_code: 'WARM',
    category_name: 'Warm Water',
    merchant_code: 79225
  },
  {
    category_code: 'COLD',
    category_name: 'Cold Water',
    merchant_code: 792251
  },
  {
    category_code: 'WARM',
    category_name: 'Warm Water',
    merchant_code: 792251
  }
];
let partner_categories = [...new Set(categories.map(x => x.merchant_code))].map(y => { return { merchant_code: y, categories: [] }; });

partner_categories.map(x => categories.map(y => {
  if (x.merchant_code == y.merchant_code) x.categories.push({ category_code: y.category_code, category_name: y.category_name });
}));
console.log(partner_categories);
