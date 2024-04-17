function maxSubarraySumCircular(nums) {
  // Find maximum sum of non circular sub array using KADEN ALGO
  let maximumSum = -Infinity;
  let currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    maximumSum = Math.max(maximumSum, currentMax);
  }
  // find minimum sum of non circular array
  let minimumSum = Infinity;
  let currentMin = 0;
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentMin = Math.min(currentMin + nums[i], nums[i]);
    minimumSum = Math.min(minimumSum, currentMin);
    totalSum += nums[i];
  }
  if (totalSum === minimumSum) {
    return maximumSum;
  } else {
    // The maximum circular subarray sum is the maximum of:
    // 1. The maximum subarray sum from step 1.
    // 2. The total sum minus the minimum subarray sum (circular part).
    return Math.max(maximumSum, totalSum - minimumSum);
  }
}
console.log(maxSubarraySumCircular([8, -4, 3, -5, 4]));
