function stockBuySell(nums) {
  let profit = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      profit +=  nums[i] - nums[i - 1];
      console.log(nums[i],nums[i-1], profit);
    }
  }
  console.log(profit);
}
stockBuySell([1, 5, 3, 8, 12]);
