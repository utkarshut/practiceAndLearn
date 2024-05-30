function findMaxSumOfKusingSlidingWindow(nums, k) {
  let sum = 0;
  let res = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  res = sum;
  for (let i = k; i < nums.length; i++) {
    console.log(res, sum);
    res = Math.max(res, sum + nums[i] - nums[i - k]);
  }
  console.log(res);
}
findMaxSumOfKusingSlidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
