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
const partner_categories = Object.values(categories.reduce((acc, category) => {
  const { merchant_code, category_code, category_name } = category;
  if (!acc[merchant_code]) {
    acc[merchant_code] = {
      merchant_code,
      categories: []
    };
  }
  acc[merchant_code].categories.push({ category_code, category_name });
  return acc;
}, {}));
console.log(partner_categories);
