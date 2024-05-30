function majorityElementMooresAlgo(nums) {
  let res = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[res] === nums[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      res = i;
      count = 1;
    }
  }
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === res) {
      count++;
    }
  }
  if (count < nums.length / 2) {
    return -1;
  }
  return res;
}
console.log(majorityElementMooresAlgo([3, 3, 4, 2, 4, 4, 2, 4, 4]));
