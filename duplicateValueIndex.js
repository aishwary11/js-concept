function toFindDuplicates(arry) {
  const yye = [];
  const uniqueElements = new Set(arry);
  console.log(uniqueElements);
  arry.filter((item, i) => {
    console.log(uniqueElements.has(item));
    if (uniqueElements.has(item)) {
      yye.push(i);
      uniqueElements.delete(item);
    } else return item;
  });
  console.log(yye);
  return [...new Set(uniqueElements)];
}
const arry = [1, 2, 1, 3, 4, 3, 5];
const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);