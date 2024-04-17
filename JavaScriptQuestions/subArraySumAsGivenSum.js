function subArraySumAsGivenSum(nums, givenSum) {
  let currentSum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    while (currentSum > givenSum) {
      currentSum = currentSum - nums[i - count];
      count++;
    }
    if (currentSum === givenSum) {
      return true;
    }
  }
  return false;
}
console.log(subArraySumAsGivenSum([4, 8, 12, 5], 17));
