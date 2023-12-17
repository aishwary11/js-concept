const categories = [
  {
    categoryCode: 'COLD',
    categoryName: 'Cold Water',
    merchantCode: 79225
  },
  {
    categoryCode: 'WARM',
    categoryName: 'Warm Water',
    merchantCode: 79225
  },
  {
    categoryCode: 'COLD',
    categoryName: 'Cold Water',
    merchantCode: 792251
  },
  {
    categoryCode: 'WARM',
    categoryName: 'Warm Water',
    merchantCode: 792251
  }
];
const partnerCategories = Object.values(categories.reduce((acc, category) => {
  const { merchantCode, categoryCode, categoryName } = category;
  if (!acc[merchantCode]) {
    acc[merchantCode] = {
      merchantCode,
      categories: []
    };
  }
  acc[merchantCode].categories.push({ categoryCode, categoryName });
  return acc;
}, {}));
console.log(partnerCategories);
