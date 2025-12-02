let findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log("left:", left);
  return nums[left];
};
console.log(findMin([3, 4, 5, 1, 2]));    //1
console.log(findMin([11, 13, 15, 17]));    //11
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));    //0

let findMax = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  console.log("left:", left);
  // The maximum is just before the minimum (handle wrap-around)
  return nums[(left - 1 + nums.length) % nums.length];
};
console.log(findMax([3, 4, 5, 1, 2]));    //5
console.log(findMax([11, 13, 15, 17]));    //17
console.log(findMax([4, 5, 6, 7, 0, 1, 2]));    //7
